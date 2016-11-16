const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const sequelize = (() => {
	if (config.use_env_variable) {
		return new Sequelize(process.env[config.use_env_variable], config);
	}

	return new Sequelize(config.database, config.username, config.password, config);
})();

module.exports = sequelize;
