var Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', function(req, res) {
    //seed data

    var starterTodos = [
      {
        username: 'test',
        todo: 'Buy Milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Pickup Mail',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Walk Dog',
        isDone: false,
        hasAttachment: false
      }
    ];

    Todos.create(starterTodos, function(err, results) {
      res.send(results);
    });
  });
}
