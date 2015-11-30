// Invocar modo 'strict' de JavaScript
'use strict';

// Cargar el model Mongoose 'User'
var User = require('mongoose').model('User');

// Crear un nuevo método controller 'create'
exports.create = function(req, res, next) {
  // Crear una nueva instancia del model Mongoose 'User'
  var user = new User(req.body);
  // Usar el método 'save' de la instancia 'User' para salvar un nuevo documento user
  user.save(function(err) {
    if (err) {
      // Llamar al siguiente middleware con un mensaje de error
      return next(err);
    } else {
      // Usar el objeto 'response' para enviar una respuesta JSON
      res.json(user);
    }
  });
};

// Crear un nuevo método controller 'list'
exports.list = function(req, res, next) {
  // Usa el método static 'User' 'find' para recuperar la lista de usuarios
  User.find({}, 'username email', function(err, users) {
    if (err) {
      // llama al siguiente middleware con un mensaje de error
      return next(err);
    } else {
      // Usa el objeto 'response' para enviar una respuesta JSON
      res.json(users);
    }
  });
};

// Crear un nuevo método controller
exports.read = function(req, res) {
  // Usa el objeto 'response' para enviar una respuesta JSON
  res.json(req.user);
};

// Crear un nuevo método controller 'userByID' 
exports.userByID = function(req, res, next, id) {
  // Usa el método static 'findOne' de 'User' para recuperar un usuario específico
  User.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      // Llama al siguiente middleware con un mensaje de error
      return next(err);
    } else {
      // Configura la propiedad 'req.user'
      req.user = user;

      // Llama al siguiente middleware
      next();
    }
  });
};