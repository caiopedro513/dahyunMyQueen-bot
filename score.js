const { error } = require("tmi.js/lib/logger");

let scoring = function(username, robpers){
    var strrob;
    var strusr;
    let myPromise = new Promise(function(myResolve, myReject) {
        connection.query('SELECT username, strength FROM fightclubstats WHERE username IN (?, ?)', [robpers, username], function(error, results, fields){
            for (var i = 0; i < results.length; i++){
                if (results[i].username == robpers){
                    strrob = results[i].strength;
                }
                if (results[i].username == username){
                    strusr = results[i].strength;
                }
            }
            if (strrob == undefined || strusr == undefined){
                myReject("Did not find them");  // when error
            }
            else {
                var score = (strrob - strusr) / 100;
                myResolve(score); // when successful
            }
        })                
    });
    return myPromise
}

module.exports = {scoring};