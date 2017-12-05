const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



var id = '5a22ca3736bc45150f49e35b';


// Load in users models

// Find user by ID
User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User found', user);
}).catch((error) => {
  console.log(error);
});

// Query works but no user - user not found

// User was found and print user

// Print error object if errors

// if (!ObjectID.isValid(id)) {
//   console.log('Object ID is not valid');
// }

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todoById) => {
  if (!todoById) {
    return console.log('ID not found');
  }
  console.log('Todo', todoById);
}).catch((error) => {
  console.log(error);
});
