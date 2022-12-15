var mysql = require('mysql');
require('dotenv').config()
globalThis.connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
  });

connection.connect();

const user = {
    setHealth : function(username, healthValue) {connection.query(`UPDATE fightclubstats SET health = health + ? WHERE username = ?`, [healthValue, username])},
    setEnergy : function(username, energyValue) {connection.query(`UPDATE fightclubstats SET energy = energy + ? WHERE username = ?`, [energyValue, username])},
    setMoney : function(username, moneyValue) {connection.query(`UPDATE fightclubstats SET money = money + ? WHERE username = ?`, [moneyValue, username])},
    setStrength : function(username, strengthValue) {connection.query(`UPDATE fightclubstats SET strength = strength + ? WHERE username = ?`, [strengthValue, username])},
    setFat : function(username, fatValue) {connection.query(`UPDATE fightclubstats SET fat = fat + ? WHERE username = ?`, [fatValue, username])},
    setSmartness : function(username, smartValue) {connection.query(`UPDATE fightclubstats SET smartness = smartness + ? WHERE username = ?`, [smartValue, username])}
};

module.exports = {user};