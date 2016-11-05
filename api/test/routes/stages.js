/* eslint-env node, mocha */
/* eslint no-unused-expressions: 'off' */

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../');
const Submissions = require('../../models/submission');

chai.use(chaiHttp);

const expect = chai.expect;

describe('/stages', () => {
	describe('GET /stages', () => {
		it('retuns JSON of the stage array', () => (
			chai.request(app).get('/stages').then((res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body).to.be.an('array');

				res.body.forEach((stage) => {
					expect(stage).to.have.property('id');
					expect(stage).to.have.property('name');
				});
			})
		));
	});

	describe('GET /stages/:stage', () => {
		it('retuns JSON of the stage information', () => (
			chai.request(app).get('/stages/wire01').then((res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body).to.have.property('id');
				expect(res.body).to.have.property('name', 'wire01');
			})
		));
	});

	describe('GET /stages/:stage/submissions', () => {
		it('retuns JSON of the submissions', () => (
			chai.request(app).get('/stages/wire01/submissions').then((res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body).to.be.an('array');

				res.body.forEach((submission) => {
					expect(submission).to.have.property('name');
					expect(submission).to.have.property('score');
					// Should not leak the board information ;)
					expect(submission).to.not.have.property('board');
				});
			})
		));
	});

	describe('POST /stages/:stage/submissions', () => {
		it('creates new submission data if the submission is valid', () => (
			chai.request(app).post('/stages/wire01/submissions').send({
				name: 'hakatashi',
				score: 100, // FIXME: remove
				board: [{
					x: 0,
					y: 0,
					type: 'wireI',
					rotate: 0,
				}, {
					x: 0,
					y: 1,
					type: 'wireI',
					rotate: 0,
				}, {
					x: 0,
					y: 2,
					type: 'wireI',
					rotate: 0,
				}],
			}).then((res) => {
				expect(res).to.have.status(200);

				return Submissions.findOne({
					order: 'createdAt DESC',
				});
			}).then((submission) => {
				expect(submission).to.not.be.null;
				expect(submission.name).to.equal('hakatashi');
			})
		));
	});
});
