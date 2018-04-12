// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');



var user = {name: 'gowty', age: 22};
var {name} = user;
console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');

    // deletemany
//   db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//     console.log(result);
//   })

//   deleteone

//   db.collection('Todos').deleteOne({text: 'eat'}).then((result) => {
//       console.log(result);
//   });

// findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//     console.log(result);
// })

// db.collection('Users').deleteMany({name: 'gowty'});

db.collection('Users').findOneAndDelete({
    _id: new ObjectId("5acde85ac555f31b2d468dae")
}).then((result) => {
    console.log(result, undefined, 2);
});
    //db.close();
});