# MongoConnection

## Environment
* Ubuntu (v14.04)
* NodeJS (v6.0.0)
* MongoDB (v2.4.9)

## Setup
* NodeJS
```
$sudo apt-get update
$curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$sudo apt-get install -y nodejs
$sudo apt-get install npm
```

* MongoDB
```
$sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
$echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
$sudo apt-get update

//x32
$sudo apt-get install -y mongodb

//x64
$sudo apt-get install -y mongodb-org

```

* Verify that MongoDB is started
```
$ps -ef | grep mongo  //mongodb   1307  1  0 02:27 ?        00:00:01 /usr/bin/mongod --config /etc/mongodb.conf

//OPTIONAL:
//If it's not running, issue the following command from the MongoDB bin directory:
//$mongod

//Console client
//$mongo
```

## Run
`$node app.js`

##MongoDB useful commands
```
$mongo

show dbs                    // show database names
show collections            // show collections in current database
show users                  // show users in current database
show profile                // show most recent system.profile entries with time >= 1ms
show logs                   // show the accessible logger names
show log [name]             // prints out the last segment of log in memory, 'global' is default
use <db_name>               // set current database
db.foo.find()               // list objects in collection foo
db.foo.find( { a : 1 } )    // list objects in foo where a == 1
it                          // result of the last line evaluated; use to further iterate
exit                        // quit the mongo shell
```
