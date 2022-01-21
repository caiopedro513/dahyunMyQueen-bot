require('dotenv').config()

var mysql = require('mysql');
globalThis.connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
  });

connection.connect();

console.log("Running :)");

let autohealth = function(){
    connection.query('UPDATE fightclubstats SET money = money + 5 WHERE health > 0', function(error, results, fields){
    })
    connection.query('UPDATE fightclubstats SET health = health + 5 WHERE health > 0 AND health < 1000', function(error, results, fields){
    })
}

let autoenergy = function(){
    connection.query('UPDATE fightclubstats SET energy = energy + 1 WHERE energy < 100', function(error, results, fields){
    })
}

let cdcheck = function(){
    let tempcd = new Date();
    connection.query('SELECT * FROM persons', function(error, results, fields){
        connection.query('DELETE FROM persons WHERE timelog < ?', [tempcd], function(error, results, fields){
        })
    })
}

setInterval(cdcheck, 60*1000);
setInterval(autoenergy, 60*1000);
setInterval(autohealth, 30*60*1000);