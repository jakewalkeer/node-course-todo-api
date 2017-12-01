const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB database');
    }
    console.log('Connected to MongoDB server');

    // delete  many
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //   console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //   console.log(result);
    // });

    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });


    // delete  many
    // db.collection('Users').deleteMany({user: 'Jake Walker'}).then((result) => {
    //   console.log(result);
    // });

    // find one and delete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a1dbbb964923c61b5bea2b3')}).then((result) => {
      console.log(JSON.stringify(results, undefined, 2));
    });

    // db.close();

  });
