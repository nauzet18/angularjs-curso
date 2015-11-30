exports.render = function(req, res) {
  res.render('index', {
    title: 'Hola Mundo',
    userFullName: req.user ? req.user.fullName : ''
  });
};

