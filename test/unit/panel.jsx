/* eslint-env mocha */

const React = require('react');
const {shallow} = require('enzyme');
const {expect} = require('chai');

const Panel = require('../../lib/panel.jsx');

describe('<Panel/>', () => {
	it('renders .panel', () => {
		const panel = shallow(<Panel parts={{}}/>);
		expect(panel.find('.panel')).to.have.length(1);
	});
});
