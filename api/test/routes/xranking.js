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
			const stage = await Stages.create({
				name: 'wire01',
				migratedVersion: 1,
			}, {transaction});

			await Submissions.bulkCreate([{
				name: 'hakatashi',
				board: JSON.stringify([]),
				blocks: 0,
				clocks: 0,
				score: 0,
				stage,
				version: 1,
			}], {transaction});

			const res = await chai.request(app).get('/ranking');

			expect(res).to.have.status(200);
			expect(res).to.be.json;
			expect(res.body).to.be.an('array');
			expect(res.body).to.have.length(1);

			res.body.forEach((submission) => {
				expect(submission).to.have.property('name');
				expect(submission).to.have.property('blocks');
				expect(submission).to.have.property('clocks');
				expect(submission).to.have.property('score');
			});
		});
	});
});
