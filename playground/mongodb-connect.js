// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// Destructuring

// var user = {name: 'Jake', age: 22};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB server');



    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert todo', err);
    //   }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //

    db.collection('Users').insertOne({
        user: 'Jake Walker',
        Age: 22,
        Location: 'London'
    }, (err, result) => {
      if (err) {
        return console.log('Unable to insert todo', err);
      }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });


    db.close;
});
