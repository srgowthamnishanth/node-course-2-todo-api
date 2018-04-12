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

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectId("5acf3bc52438c30fc4850d33")
// }, {
//     $set: {
//         completed: true
//     }
// }, {
//     returnOriginal: false
// }).then((re) => {
//     console.log(re);
// });

db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5acf42812438c30fc4850d34')
}, {
    $set: {
        name: 'thala'
    }, 
        $inc: {
            age: 1
        }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});

    //db.close();
});