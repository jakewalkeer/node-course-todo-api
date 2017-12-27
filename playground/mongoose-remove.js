const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//
//   console.log(result);
// });
//


Todo.findOneAndRemove({_id:'5a270dca3706c13ee4b0bf43'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5a270dca3706c13ee4b0bf43').then((todo) => {
  console.log(todo);
});
