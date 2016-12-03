/* eslint no-console: 'off' */

// ステージのバージョンを変更した場合にランキングをマイグレートするスクリプト
// TODO: ステージを追加・削除した場合に対応

const assert = require('assert');
const Promise = require('bluebird');
const sequelize = require('../models');
const Stages = require('../models/stage');
const Submissions = require('../models/submission');
const stageData = require('../../stages');
const {validateSubmission, calculateScore} = require('../../lib/validator');

sequelize.transaction((transaction) => {
	// Get all stages
	console.log('Getting stages...');

	return Stages.findAll({transaction}).then((stages) => {
		console.log(`Got ${stages.length} stages`);

		// Find stages which needs migration
		const migratingStages = stages.filter((stage) => {
			const stageDatum = stageData.find((tempStage) => tempStage.name === stage.name);
			assert.notStrictEqual(typeof stageDatum, 'undefined');

			if (stage.migratedVersion < stageDatum.version) {
				return true;
			}

			return false;
		});

		console.log(`Migrating ${migratingStages.length} stages...`);

		return Promise.each(migratingStages, (stage) => {
			const stageDatum = stageData.find((tempStage) => tempStage.name === stage.name);

			console.log(`Migrating "${stage.name}" stage... (version: ${stage.migratedVersion} => ${stageDatum.version})`);

			return Submissions.findAll({
				where: {
					stageId: stage.id,
					version: stage.migratedVersion,
				},
				transaction,
			}).then((submissions) => {
				console.log(`Migrating ${submissions.length} submissions...`);

				return Promise.each(submissions, (submission) => {
					console.log(`Validating submission from ${submission.name} of score ${submission.score}`);

					const board = JSON.parse(submission.board);

					console.time('validation');
					const {pass, blocks, clocks} = validateSubmission({
						board,
						stage: stage.name,
					});
					console.timeEnd('validation');

					if (!pass) {
						console.log('Validation failed. Not updating version.');
						return Promise.resolve();
					}

					const score = calculateScore({
						clocks,
						blocks,
						stage: stageDatum,
					});

					console.log(`Validation Succeeded. (score: ${submission.score} => ${score})`);

					return submission.update({
						score,
						blocks,
						clocks,
						version: stageDatum.version,
					}, {transaction});
				});
			}).then(() => {
				console.log(`Updating migratedVersion of "${stage.name}" stage...`);

				return stage.update({
					migratedVersion: stageDatum.version,
				}, {transaction});
			});
		});
	});
}).then(() => {
	console.log('done.');
});
