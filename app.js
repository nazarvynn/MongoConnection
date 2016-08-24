var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
    if (err) throw err;

    console.log("successfully connected to the database");

    var collection = db.collection('test_insert');

    collection.insert({ a: 2 }, function (error, docs) {
        collection.count(function (error, count) {
            console.log(format("count = %s", count));
        });
    });

    collection.find().toArray(function(error, results) {
        console.dir(results);
        db.close();
    });
});