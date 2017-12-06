var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectId} = require('mongodb');

var app = express();

const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    console.log(e)
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // Validate ID using isValid then respond with 404

  // findbyID to query todos
    // Success case
      // if todo exists, then send back
      // if no todo then send back 404 with empty body
    // Error case
      // send back 400 and send empty body

  if (!ObjectId.isValid(id)) {
     console.log("Invalid ID requested");
     return res.status(404).send();
  }

  Todo.findById(id).then((todoById) => {
    if (!todoById) {
      console.log("ID not in the database");
      return res.status(404).send();
    }
    console.log('ID tracked and found');
    return res.send(todoById);
  }).catch((error) => {
    return res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});


module.exports = {app};















//
// var newToDo = new ToDo({
//   text: 'Cook dinner'
// });
//
// var secondToDo = new ToDo({
//   completed: false,
//   completedAt: 45
// });

// secondToDo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });
//
// newToDo.save().then((doc) => {
//   console.log('Saved todo,', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });




// var newUser = new User({
// });
//
// newUser.save().then((doc) => {
//     console.log('Saved the User', doc);
//   }, (e) => {
//     console.log('Unable to save the User', e);
// });

// save new something
