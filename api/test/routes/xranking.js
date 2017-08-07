/* eslint-env node, mocha */
/* eslint no-unused-expressions: 'off' */

const chai = require('chai');
const chaiHttp = require('chai-http');
const Umzug = require('umzug');

const app = require('../../');
const sequelize = require('../../models');
const Stages = require('../../models/stage');
const Submissions = require('../../models/submission');

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

let transaction = null;

describe('/ranking', () => {
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

	describe('GET /ranking', () => {
		it('retuns JSON of the submission array', async () => {
			const stage1 = await Stages.create({
				name: 'wire01',
				migratedVersion: 1,
			}, {transaction});

			const stage2 = await Stages.create({
				name: 'calc01',
				migratedVersion: 1,
			}, {transaction});

			const submissionFactory = {
				name: 'A',
				board: JSON.stringify([]),
				blocks: 0,
				clocks: 0,
				score: 0,
				version: 1,
			};

			await Submissions.bulkCreate([
				Object.assign({}, submissionFactory, {
					stageId: stage1.id,
					name: 'A',
					score: 10000,
				}),
				Object.assign({}, submissionFactory, {
					stageId: stage1.id,
					name: 'B',
					score: 10000,
				}),
				Object.assign({}, submissionFactory, {
					stageId: stage1.id,
					name: 'C',
					score: 10000,
				}),
				Object.assign({}, submissionFactory, {
					stageId: stage2.id,
					name: 'A',
					score: 10000,
				}),
				Object.assign({}, submissionFactory, {
					stageId: stage2.id,
					name: 'B',
					score: 5000,
				}),
			], {transaction});

			const res = await chai.request(app).get('/ranking');

			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body).to.deep.equal([{
				name: 'A',
				score: 20000,
			}, {
				name: 'B',
				score: 15000,
			}, {
				name: 'C',
				score: 10000,
			}]);
		});
	});
});
