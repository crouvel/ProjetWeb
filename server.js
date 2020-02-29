const Express = require('express');
const { Sequelize } = require('sequelize'); 
const PORT = process.env.PORT || 3000;
const app = Express();

const userRoute = require('./routes/User.js')
const sequelize = new Sequelize('prj', 'root', 'YES', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});




try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use('/user', userRoute);

app.listen(PORT);