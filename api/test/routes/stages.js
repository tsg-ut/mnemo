/* eslint-env node, mocha */
/* eslint no-unused-expressions: 'off' */

const chai = require('chai');
const chaiHttp = require('chai-http');
const Umzug = require('umzug');

const mockery = require('mockery');
const slackMock = {};
const twitterMock = {};
mockery.registerMock('../utils/slack', slackMock);
mockery.registerMock('../utils/twitter', twitterMock);
mockery.enable({
	warnOnUnregistered: false,
});

const app = require('../../');
const sequelize = require('../../models');
const Stages = require('../../models/stage');
const Submissions = require('../../models/submission');
const stageData = require('../../../stages');
const {nop} = require('../../../lib/util');
const {calculateScore} = require('../../../lib/validator');
const wire01 = stageData.find((stageDatum) => stageDatum.name === 'wire01');

const umzug = new Umzug({
	storage: 'sequelize',
	storageOptions: {
		sequelize,
	},
	migrations: {
		params: [sequelize.getQueryInterface(), sequelize.constructor],
	},
});

chai.use(chaiHttp);

const {expect} = chai;

const now = new Date();
const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);

let transaction = null;

describe('/stages', () => {
	// Execute all migrations
	before(async () => {
		await umzug.up();
	});

	beforeEach(async () => {
		transaction = await sequelize.transaction();
	});

	afterEach(async () => {
		await transaction.rollback();
	});

	after(() => {
		mockery.disable();
	});

	describe('GET /stages', () => {
		it('returns JSON of the stage array', async () => {
			await Stages.bulkCreate([{
				name: 'stage1',
				migratedVersion: 1,
			}, {
				name: 'stage2',
				migratedVersion: 2,
			}, {
				name: 'stage3',
				migratedVersion: 3,
			}], {transaction});

			const res = await chai.request(app).get('/stages');

			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body).to.be.an('array');
			expect(res.body).to.have.length(3);

			res.body.forEach((stage) => {
				expect(stage).to.have.property('id');
				expect(stage).to.have.property('name');
			});
		});
	});

	describe('GET /stages/:stage', () => {
		it('returns JSON of the stage information', async () => {
			await Stages.bulkCreate([{
				name: 'wire01',
				migratedVersion: 2,
			}], {transaction});

			const res = await chai.request(app).get('/stages/wire01');

			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body).to.have.property('id');
			expect(res.body).to.have.property('name', 'wire01');
		});
	});

	describe('GET /stages/:stage/submissions', () => {
		const board = JSON.stringify([{
			x: 1,
			y: 0,
			name: 'wireI',
			rotate: 0,
		}, {
			x: 1,
			y: 1,
			name: 'wireI',
			rotate: 0,
		}, {
			x: 1,
			y: 2,
			name: 'wireI',
			rotate: 0,
		}]);

		it('returns JSON of the correctly ordered submissions', async () => {
			const stage = await Stages.create({
				name: 'wire01',
				migratedVersion: 2,
			}, {transaction});

			await Submissions.bulkCreate([{
				name: 'kurgm',
				board,
				score: 5000,
				blocks: 3,
				clocks: 3,
				stageId: stage.id,
				version: 2,
				createdAt: now,
				updatedAt: now,
			}, {
				name: 'moratorium08',
				board,
				score: 10000,
				blocks: 3,
				clocks: 3,
				stageId: stage.id,
				version: 2,
				createdAt: now,
				updatedAt: now,
			}, {
				name: 'Yosshi999',
				board,
				score: 5000,
				blocks: 3,
				clocks: 3,
				stageId: stage.id,
				version: 2,
				createdAt: yesterday,
				updatedAt: yesterday,
			}, {
				name: 'hakatashi',
				board,
				score: 10000,
				blocks: 3,
				clocks: 3,
				stageId: stage.id,
				version: 2,
				createdAt: yesterday,
				updatedAt: yesterday,
			}], {transaction});

			const res = await chai.request(app).get('/stages/wire01/submissions');

			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body).to.be.an('array');
			expect(res.body).to.have.length(4);
			expect(res.body[0].name).to.equal('hakatashi');
			expect(res.body[1].name).to.equal('moratorium08');
			expect(res.body[2].name).to.equal('Yosshi999');
			expect(res.body[3].name).to.equal('kurgm');

			res.body.forEach((submission) => {
				expect(submission).to.have.property('name');
				expect(submission).to.have.property('score');
				// Should not leak the board information ;)
				expect(submission).to.not.have.property('board');
			});
		});

		it('only lists submissions with the migrated version', async () => {
			const stage = await Stages.create({
				name: 'wire01',
				migratedVersion: 3,
			}, {transaction});

			await Submissions.bulkCreate([{
				name: 'satos',
				board,
				score: 10000,
				blocks: 3,
				clocks: 3,
				stageId: stage.id,
				version: 2,
			}, {
				name: 'cookies',
				board,
				score: 10000,
				blocks: 3,
				clocks: 3,
				stageId: stage.id,
				version: 3,
			}, {
				name: 'gasin',
				board,
				score: 10000,
				blocks: 3,
				clocks: 3,
				stageId: stage.id,
				version: 4,
			}], {transaction});

			const res = await chai.request(app).get('/stages/wire01/submissions');

			expect(res).to.have.status(200);
			expect(res.body).to.have.length(1);
			expect(res.body[0].name).to.equal('cookies');
		});

		it('limits returned submissions to 20', async () => {
			const stage = await Stages.create({
				name: 'wire01',
				migratedVersion: 2,
			}, {transaction});

			await Submissions.bulkCreate(Array.from({length: 100}, (item, index) => ({
				name: `user${index}`,
				board,
				score: 10000,
				blocks: 3,
				clocks: 3,
				stageId: stage.id,
				version: 2,
			})), {transaction});

			const res = await chai.request(app).get('/stages/wire01/submissions');

			expect(res).to.have.status(200);
			expect(res.body).to.have.length(20);
		});
	});

	describe('POST /stages/:stage/submissions', () => {
		let stage = null;

		const validBoard = [{
			x: 1,
			y: 0,
			type: 'wireI',
			rotate: 0,
		}, {
			x: 1,
			y: 1,
			type: 'wireI',
			rotate: 0,
		}, {
			x: 1,
			y: 2,
			type: 'wireI',
			rotate: 0,
		}];
		const validBoardScore = calculateScore({
			clocks: 3,
			blocks: 3,
			stage: wire01,
		});

		const invalidBoard = [{
			x: 1,
			y: 0,
			type: 'wireI',
			rotate: 0,
		}, {
			x: 1,
			y: 1,
			type: 'wireI',
			rotate: 1,
		}, {
			x: 1,
			y: 2,
			type: 'wireI',
			rotate: 0,
		}];
		const invalidBoardScore = calculateScore({
			clocks: 3,
			blocks: 3,
			stage: wire01,
		});

		const lowerScoreBoard = [{
			x: 1,
			y: 0,
			type: 'wireI',
			rotate: 0,
		}, {
			x: 1,
			y: 1,
			type: 'wireI',
			rotate: 0,
		}, {
			x: 0,
			y: 1,
			type: 'wireI',
			rotate: 0,
		}, {
			x: 1,
			y: 2,
			type: 'wireI',
			rotate: 0,
		}];
		const lowerScoreBoardScore = calculateScore({
			clocks: 3,
			blocks: 4,
			stage: wire01,
		});

		before(async () => {
			await expect(validBoardScore).to.equal(10000);
		});

		beforeEach(async () => {
			stage = await Stages.create({
				name: 'wire01',
				migratedVersion: wire01.version,
			});
			slackMock.send = nop;
			twitterMock.tweet = nop;
		});

		it('reports 404 error when attempted to submit to unknown stage', async () => {
			await chai.request(app).post('/stages/hoge/submissions').send({
				name: 'hakatashi',
				board: validBoard,
				score: validBoardScore,
			}) .then((res) => expect(res).to.have.status(404));
		});

		it('reports 500 error when stage is not found in DB', async () => {
			// FIXME 'calc01' is magic stage name...
			await chai.request(app).post('/stages/calc01/submissions').send({
				name: 'hakatashi',
				board: validBoard,
				score: validBoardScore,
			}).then((res) => expect(res).to.have.status(500));
		});

		it('reports 400 error when attempted to post invalid board', async () => {
			await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'hakatashi',
				board: invalidBoard,
				score: invalidBoardScore,
			}).then((res) => expect(res).to.have.status(400));
		});

		it('reports 400 error when attempted to post malicious name (object)', async () => {
			await chai.request(app).post('/stages/wire01/submissions').send({
				name: {$ne: 'attacker'},
				board: validBoard,
				score: validBoardScore,
			}).then((res) => expect(res).to.have.status(400));
		});

		it('creates new submission data if the submission is valid', async () => {
			const res = await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'satos',
				board: validBoard,
				score: validBoardScore,
			});
			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body.name).to.equal('satos');
			expect(res.body.score).to.equal(validBoardScore);
			expect(res.body.blocks).to.equal(3);
			expect(res.body.version).to.equal(wire01.version);

			const submission = await Submissions.findOne({
				order: [
					['createdAt', 'DESC'],
				],
			});

			expect(submission).to.not.be.null;
			expect(submission.name).to.equal('satos');
			expect(submission.score).to.equal(validBoardScore);
		});

		it('creates new submission data with right score calculated by server', async () => {
			const res = await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'satos',
				board: validBoard,
				score: validBoardScore + 10000,
			});
			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body.name).to.equal('satos');
			expect(res.body.score).to.equal(validBoardScore);
			expect(res.body.blocks).to.equal(3);
			expect(res.body.version).to.equal(wire01.version);

			const submission = await Submissions.findOne({
				order: [
					['createdAt', 'DESC'],
				],
			});

			expect(submission).to.not.be.null;
			expect(submission.name).to.equal('satos');
			expect(submission.score).to.equal(validBoardScore);
		});

		it('reports error when the submission with higher score is existing', async () => {
			await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'hakatashi',
				board: validBoard,
				score: validBoardScore,
			});

			await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'hakatashi',
				board: lowerScoreBoard,
				score: lowerScoreBoardScore,
			}).then((res) => expect(res).to.have.status(400));
		});

		it('omits calculting score and reports error when lower score than existing submission was proposed by client', async () => {
			await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'hakatashi',
				board: lowerScoreBoard,
				score: lowerScoreBoardScore,
			});

			await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'hakatashi',
				board: validBoard,
				score: lowerScoreBoardScore,
			}).then((res) => expect(res).to.have.status(400));
		});

		it('reports error when the submission with higher score is existing, regardless of proposed score by client', async () => {
			await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'hakatashi',
				board: validBoard,
				score: validBoardScore,
			});

			await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'hakatashi',
				board: lowerScoreBoard,
				score: validBoardScore,
			}).then((res) => expect(res).to.have.status(400));
		});

		it('rejects submission with empty name', async () => {
			await chai.request(app).post('/stages/wire01/submissions').send({
				name: '',
				board: validBoard,
				score: validBoardScore,
			}).then((res) => expect(res).to.not.have.status(200));
		});

		it('updates record when the submission score is higher than existing one', async () => {
			await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'kurgm',
				board: lowerScoreBoard,
				score: lowerScoreBoardScore,
			});

			const res = await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'kurgm',
				board: validBoard,
				score: validBoardScore,
			});

			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body.score).to.equal(validBoardScore);
			expect(res.body.blocks).to.equal(3);

			const submissions = await Submissions.findAll({
				where: {
					name: 'kurgm',
				},
			});

			expect(submissions).to.have.length(1);
			expect(submissions[0].score).to.equal(validBoardScore);
			expect(submissions[0].blocks).to.equal(3);
		});

		it('updates record when existing submission version is outdated', async () => {
			await Submissions.create({
				name: 'cookies',
				board: JSON.stringify(validBoard),
				score: validBoardScore,
				blocks: 3,
				clocks: 3,
				version: 1,
				stageId: stage.id,
			});

			const res = await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'cookies',
				board: lowerScoreBoard,
				score: lowerScoreBoardScore,
			});

			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body.score).to.be.below(validBoardScore);
			expect(res.body.blocks).to.equal(4);

			const submissions = await Submissions.findAll({
				where: {
					name: 'cookies',
				},
			});

			expect(submissions).to.have.length(1);
			expect(submissions[0].score).to.be.below(validBoardScore);
			expect(submissions[0].blocks).to.equal(4);
		});

		it('posts to slack when successful submission was sent', async () => {
			const promise = new Promise((resolve, reject) => {
				slackMock.send = ({text, attachments}) => {
					try {
						expect(text).to.include('kurgm');
						expect(text).to.include(String(validBoardScore));
						expect(attachments).to.have.lengthOf(1);
						resolve();
					} catch (error) {
						reject(error);
					}
				};
			});

			await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'kurgm',
				board: validBoard,
				score: validBoardScore,
			});

			await promise;
		});

		it('posts to twitter when successful submission was sent', async () => {
			const promise = new Promise((resolve, reject) => {
				twitterMock.tweet = ({status}) => {
					try {
						expect(status).to.include('kurgm');
						expect(status).to.include(String(validBoardScore));
						resolve();
					} catch (error) {
						reject(error);
					}
				};
			});

			await chai.request(app).post('/stages/wire01/submissions').send({
				name: 'kurgm',
				board: validBoard,
				score: validBoardScore,
			});

			await promise;
		});
	});
});
