// Imports
var express = require('express');
var usersCtrl = require('./routes/usersCtrl');
var route = require('./routes')


// Router
exports.router = (function() {
  var apiRouter = express.Router();
  apiRouter.route('/users/register/').post(usersCtrl.register);
  apiRouter.route('/users/login');

 



  return apiRouter;
})();