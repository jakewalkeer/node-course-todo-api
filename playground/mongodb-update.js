const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB server');

    // find one and update

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID("5a21a1dc38581303af10066d")
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5a1dc22b1dc47a63561231e7")
    }, {
      $set: {
          user: 'Emma-Jane Walker'
        },
      $inc: {
        Age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    //
    // db.collection('Users').findOneAndUpdate({
    //   _id: new ObjectID("5a1dc22b1dc47a63561231e7")
    // }, {
    //   $set: {
    //     user: 'Jake Walker'
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.close();

  });
