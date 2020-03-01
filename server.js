const Express = require('express');
const { Sequelize } = require('sequelize'); 
const app = Express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const userRoute = require('./routes/User.js')
const sequelize = new Sequelize('prj', 'root', 'Ph9Iw3Nt4qaAiePj', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});




try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use('/user', userRoute);

app.get('/status', (req, res) => {
	res.send('Hello World!')
});


app.listen(process.env.PORT || 3000);