const Sequelize = require('sequelize');

const sequelize = new Sequelize('test_node', 'tonodb', 'tonomodel', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;