/* eslint-env node, mocha */
/* eslint no-unused-expressions: 'off' */

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../');

chai.use(chaiHttp);

const expect = chai.expect;

describe('/stages', () => {
	describe('GET /stages', () => {
		it('retuns JSON oy the stage array', () => (
			chai.request(app).get('/stages').then((res) => {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(res.body).to.be.an('array');

				res.body.forEach((stage) => {
					expect(stage).have.property('id');
					expect(stage).have.property('name');
					expect(stage).have.property('width');
					expect(stage).have.property('height');
				});
			})
		));
	});
});
