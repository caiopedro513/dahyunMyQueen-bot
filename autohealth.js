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
    connection.query('UPDATE fightclubstats SET money = money + 5, health = health + 5 WHERE health > 0', function(error, results, fields){
    })
    connection.query('UPDATE fightclubstats SET energy = energy + 30 WHERE energy < 71', function(error, results, fields){
    })
}

setInterval(autohealth, 30*60*1000);