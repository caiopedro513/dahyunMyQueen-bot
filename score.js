const { client } = require("tmi.js");
const { error } = require("tmi.js/lib/logger");

let scoring = function(username, robpers){
    var strrob;
    var strusr;
    var enrrob;
    var enrusr;
    let myPromise = new Promise(function(myResolve, myReject) {
        connection.query('SELECT username, strength, energy FROM fightclubstats WHERE username IN (?, ?)', [robpers, username], function(error, results, fields){
            for (var i = 0; i < results.length; i++){
                if (results[i].username == robpers){
                    strrob = results[i].strength;
                    enrrob = results[i].energy;
                }
                if (results[i].username == username){
                    strusr = results[i].strength;
                    enrusr = results[i].energy;
                }
            }
            if (strrob == undefined || strusr == undefined){
                myReject("Did not find them");  // when error
            }
            else {
                console.log(`${strrob}, ${enrrob}`);
                console.log(`${strusr}, ${enrusr}`)
                var score = ((enrrob + strrob) - (strusr + enrusr));
                score = score / 100000;
                console.log(`${score}`);
                myResolve(score); // when successful
            }
        })                
    });
    return myPromise
}

module.exports = {scoring};