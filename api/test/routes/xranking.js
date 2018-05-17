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
				board: JSON.stringify([]),
				blocks: 0,
				clocks: 0,
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

		it('does not include scores from old version stage', async () => {
			const stage1 = await Stages.create({
				name: 'wire01',
				migratedVersion: 1,
			}, {transaction});

			const stage2 = await Stages.create({
				name: 'calc01',
				migratedVersion: 1,
			}, {transaction});

			const stage3 = await Stages.create({
				name: 'calc02',
				migratedVersion: 2,
			}, {transaction});

			const submissionFactory = {
				name: 'A',
				board: JSON.stringify([]),
				blocks: 0,
				clocks: 0,
				score: 10000,
				version: 1,
			};

			await Submissions.bulkCreate([
				Object.assign({}, submissionFactory, {
					stageId: stage1.id,
				}),
				Object.assign({}, submissionFactory, {
					stageId: stage2.id,
				}),
				Object.assign({}, submissionFactory, {
					stageId: stage3.id,
				}),
			], {transaction});

			const res = await chai.request(app).get('/ranking');

			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body).to.deep.equal([{
				name: 'A',
				score: 20000,
			}]);
		});

		describe('since parameter', () => {
			it('reports error when invalid date is supplied', async () => {
				await chai.request(app).get('/ranking').query({since: 'hogehoge'})
					.then((res) => expect(res).to.have.status(400));
			});

			it('filters submissions only from specified time', async () => {
				const stage1 = await Stages.create({
					name: 'wire01',
					migratedVersion: 1,
				}, {transaction});

				const stage2 = await Stages.create({
					name: 'calc01',
					migratedVersion: 1,
				}, {transaction});

				const stage3 = await Stages.create({
					name: 'calc02',
					migratedVersion: 1,
				}, {transaction});

				const submissionFactory = {
					name: 'A',
					board: JSON.stringify([]),
					blocks: 0,
					clocks: 0,
					score: 10000,
					version: 1,
				};

				await Submissions.bulkCreate([
					Object.assign({}, submissionFactory, {
						updatedAt: new Date('2017-04-01'),
						stageId: stage1.id,
					}),
					Object.assign({}, submissionFactory, {
						updatedAt: new Date('2017-05-01'),
						stageId: stage2.id,
					}),
					Object.assign({}, submissionFactory, {
						updatedAt: new Date('2017-06-01'),
						stageId: stage3.id,
					}),
				], {transaction});

				const res = await chai.request(app).get('/ranking').query({since: '2017-05-01'});

				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body).to.deep.equal([{
					name: 'A',
					score: 20000,
				}]);
			});
		});

		describe('limit parameter', () => {
			it('restricts size of returned array', async () => {
				const stage = await Stages.create({
					name: 'wire01',
					migratedVersion: 1,
				}, {transaction});

				const submissionFactory = {
					board: JSON.stringify([]),
					blocks: 0,
					clocks: 0,
					version: 1,
					stageId: stage.id,
					score: 10000,
				};

				await Submissions.bulkCreate([
					Object.assign({}, submissionFactory, {
						name: 'A',
					}),
					Object.assign({}, submissionFactory, {
						name: 'B',
					}),
					Object.assign({}, submissionFactory, {
						name: 'C',
					}),
				], {transaction});

				const res = await chai.request(app).get('/ranking').query({limit: 2});

				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body).to.have.length(2);
			});
		});
	});
});
