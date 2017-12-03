var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

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

app.listen(3000, () => {
  console.log('Started on port 3000');
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
