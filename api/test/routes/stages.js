/* eslint-env node, mocha */
/* eslint no-unused-expressions: 'off' */

const chai = require('chai');
const chaiHttp = require('chai-http');
const Umzug = require('umzug');
const app = require('../../');
const sequelize = require('../../models');
const Stages = require('../../models/stage');
const Submissions = require('../../models/submission');
const stageData = require('../../../stages');
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

const expect = chai.expect;

const now = new Date();
const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);

let transaction = null;

// Execute all migrations
before(() => umzug.up());

beforeEach(() => (
	sequelize.transaction().then((newTransaction) => {
		transaction = newTransaction;
	})
));

afterEach(() => (
	transaction.rollback()
));

describe('/stages', () => {
	describe('GET /stages', () => {
		it('retuns JSON of the stage array', () => (
			Stages.bulkCreate([{
				name: 'stage1',
				migratedVersion: 1,
			}, {
				name: 'stage2',
				migratedVersion: 2,
			}, {
				name: 'stage3',
				migratedVersion: 3,
			}], {transaction}).then(() => (
				chai.request(app).get('/stages')
			)).then((res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body).to.be.an('array');
				expect(res.body).to.have.length(3);

				res.body.forEach((stage) => {
					expect(stage).to.have.property('id');
					expect(stage).to.have.property('name');
				});
			})
		));
	});

	describe('GET /stages/:stage', () => {
		it('retuns JSON of the stage information', () => (
			Stages.bulkCreate([{
				name: 'wire01',
				migratedVersion: 2,
			}], {transaction}).then(() => (
				chai.request(app).get('/stages/wire01')
			)).then((res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body).to.have.property('id');
				expect(res.body).to.have.property('name', 'wire01');
			})
		));
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

		it('retuns JSON of the submissions', () => (
			Stages.create({
				name: 'wire01',
				migratedVersion: 2,
			}, {transaction}).then((stage) => (
				Submissions.bulkCreate([{
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
				}], {transaction})
			)).then(() => (
				chai.request(app).get('/stages/wire01/submissions')
			)).then((res) => {
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
			})
		));

		it('only lists submissions with the migrated version', () => (
			Stages.create({
				name: 'wire01',
				migratedVersion: 3,
			}, {transaction}).then((stage) => (
				Submissions.bulkCreate([{
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
				}], {transaction})
			)).then(() => (
				chai.request(app).get('/stages/wire01/submissions')
			)).then((res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.have.length(1);
				expect(res.body[0].name).to.equal('cookies');
			})
		));
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

		beforeEach(() => (
			Stages.create({
				name: 'wire01',
				migratedVersion: 1,
			}).then((newStage) => {
				stage = newStage;
			})
		));

		it('creates new submission data if the submission is valid', () => (
			chai.request(app).post('/stages/wire01/submissions').send({
				name: 'satos',
				board: validBoard,
			}).then((res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body.name).to.equal('satos');
				expect(res.body.score).to.equal(10000);
				expect(res.body.blocks).to.equal(3);
				expect(res.body.version).to.equal(wire01.version);

				return Submissions.findOne({
					order: 'createdAt DESC',
				});
			}).then((submission) => {
				expect(submission).to.not.be.null;
				expect(submission.name).to.equal('satos');
				expect(submission.score).to.equal(10000);
			})
		));

		it('reports error when the submission with higher score is existing', () => (
			chai.request(app).post('/stages/wire01/submissions').send({
				name: 'hakatashi',
				board: validBoard,
			}).then(() => (
				chai.request(app).post('/stages/wire01/submissions').send({
					name: 'hakatashi',
					board: lowerScoreBoard,
				})
			)).then(() => {
				expect.fail();
			}).catch((res) => {
				expect(res).to.have.status(400);
			})
		));

		it('updates record when the submission score is higher than existing one', () => (
			chai.request(app).post('/stages/wire01/submissions').send({
				name: 'kurgm',
				board: lowerScoreBoard,
			}).then(() => (
				chai.request(app).post('/stages/wire01/submissions').send({
					name: 'kurgm',
					board: validBoard,
				})
			)).then((res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body.score).to.equal(10000);
				expect(res.body.blocks).to.equal(3);

				return Submissions.findAll({
					where: {
						name: 'kurgm',
					},
				});
			}).then((submissions) => {
				expect(submissions).to.have.length(1);
				expect(submissions[0].score).to.equal(10000);
				expect(submissions[0].blocks).to.equal(3);
			})
		));

		it('updates record when existing submission version is outdated', () => (
			Submissions.create({
				name: 'cookies',
				board: JSON.stringify(validBoard),
				score: 10000,
				blocks: 3,
				clocks: 3,
				version: 1,
				stageId: stage.id,
			}).then(() => (
				chai.request(app).post('/stages/wire01/submissions').send({
					name: 'cookies',
					board: lowerScoreBoard,
				})
			)).then((res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body.score).to.be.below(10000);
				expect(res.body.blocks).to.equal(4);

				return Submissions.findAll({
					where: {
						name: 'cookies',
					},
				});
			}).then((submissions) => {
				expect(submissions).to.have.length(1);
				expect(submissions[0].score).to.be.below(10000);
				expect(submissions[0].blocks).to.equal(4);
			})
		));
	});
});
