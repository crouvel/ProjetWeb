var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var songUploadRouter = require('./routes/songUpload');
var libraryRouter = require('./routes/library');
var playlistRouter = require ('./routes/playlist');
var artistRouter = require('./routes/artist');
var albumRouter = require('./routes/album');
var accountRouter = require('./routes/account');
var createPlaylistRouter = require('./routes/createPlaylist');
var updatePlaylistRouter = require('./routes/updatePlaylist');
var addArtistRouter = require('./routes/addArtist');
var addAlbumRouter = require('./routes/addAlbum');
var updateArtistRouter = require('./routes/updateArtist');
var updateAlbumRouter = require('./routes/updateAlbum');


const sequelize = new Sequelize('heroku_802e11dc5cef23a', 'b540f1accf28a8', 'd7de8a86', {
  host: 'eu-cdbr-west-02.cleardb.net',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/songUpload', songUploadRouter);
app.use('/library', libraryRouter);
app.use('/playlist', playlistRouter);
app.use('/album', albumRouter);
app.use('/artist', artistRouter);
app.use('/account', accountRouter);
app.use('/createPlaylist', createPlaylistRouter);
app.use('/updatePlaylist', updatePlaylistRouter);
app.use('/addArtist', addArtistRouter);
app.use('/addAlbum', addAlbumRouter);
app.use('/updateArtist', updateArtistRouter);
app.use('/updateAlbum', updateAlbumRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
