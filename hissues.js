require('dotenv').config()
let getUserStats = require(`./users/getUserStats`).getUserStats;
let updateUserStats = require(`./users/updateUserStats`).updateUserStats;
let resetUserStats = require(`./users/resetUserStats`).resetUserStats;
let diceroll = require(`./functions`).diceroll;

var mysql = require('mysql');
globalThis.connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
  });

connection.connect();

let hissues = function(){
    connection.query(`SELECT username, fat, health FROM fightclubstats WHERE fat > 1600`, function(error, results, fields){
        for (x in results){

            let username = results[x].username

            console.log(username);
            
            let sub = results[x].fat / 1000
            
            roll = diceroll()

            if (roll >= 100 - sub){
                resetUserStats(username)
            }
            
            else{
                updateUserStats(username, -sub, 0, 0, 0, 0, 0)
            }
        }
    })
}

module.exports = {hissues}