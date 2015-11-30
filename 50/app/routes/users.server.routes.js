// Invocar el modo 'strict' de JavaScript
'use strict';

// Cargar el controller 'users'
var users = require('../../app/controllers/users.server.controller');

// Define el método  routes module
module.exports = function(app) {
	// Set up the 'users' base routes 
	app.route('/users').post(users.create);
};