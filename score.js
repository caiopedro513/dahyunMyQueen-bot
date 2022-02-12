const { client } = require("tmi.js");
const { error } = require("tmi.js/lib/logger");

let scoring = function(username, robpers){
    var strrob;
    var strusr;
    var enrrob;
    var enrusr;
    let fatusr;
    let fatrob;
    let smrtusr;
    let smrtrob;
    let myPromise = new Promise(function(myResolve, myReject) {
        connection.query('SELECT username, strength, energy, fat, smartness FROM fightclubstats WHERE username IN (?, ?)', [robpers, username], function(error, results, fields){
            for (var i = 0; i < results.length; i++){
                if (results[i].username == robpers){
                    strrob = results[i].strength;
                    enrrob = results[i].energy / 2;
                    fatrob = results[i].fat * 0.25
                    smrtrob = results[i].smartness * 0.25
                }
                if (results[i].username == username){
                    strusr = results[i].strength;
                    enrusr = results[i].energy / 2;
                    fatusr = results[i].fat * 0.25
                    smrtusr = results[i].smartness * 0.25
                }
            }
            if (strrob == undefined || strusr == undefined){
                myReject(`Did not find them ${robpers}`);  // when error
            }
            else {
                var score = (((enrrob + strrob + smrtrob) - fatrob) - ((strusr + enrusr + smrtusr) - fatusr));
                score = score / 100000;
                myResolve(score); // when successful
            }
        })                
    });
    return myPromise
}

module.exports = {scoring};