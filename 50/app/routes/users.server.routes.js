// Invocar el modo 'strict' de JavaScript
'use strict';

// Cargar el controller 'users'
var users = require('../../app/controllers/users.server.controller');

// Define el método  routes module
module.exports = function(app) {
	
  // Configura la ruta base para 'users' 
  app.route('/users')
      .post(users.create)
      .get(users.list);

  app.route('/users/:userId')
     .get(users.read);
  
  app.param('userId', users.userByID);

};