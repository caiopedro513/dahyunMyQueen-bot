const { client } = require("tmi.js");
const { error } = require("tmi.js/lib/logger");

let pricing = function(username){
    var price = 0;
    let prices = new Promise(function(myResolve, myReject) {
        connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
            if (results[0].money >= 150 ){
                price = results[0].money * 0.35;
            }
            else if (results[0].money < 150){
                price = 1;
            }
            
            if (price == 0){
                myReject("Error");  // when error
            }
            if (price > 0) {
                myResolve(price); // when successful
            }
        })
    });
    return prices
}

module.exports = {pricing};