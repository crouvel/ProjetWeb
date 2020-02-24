const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define{
	'playlist',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING
			defaultValue: Sequelize.null
		},
		
	},
	{
		timestamps: false
	}

}