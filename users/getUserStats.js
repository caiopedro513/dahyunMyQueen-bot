const { username } = require("tmi.js/lib/utils");

let getUserStats = function(target, username){
    let usrstats = new Promise (function(myResolve, myReject) {
        if (!target){
            connection.query(`SELECT * FROM fightclubstats WHERE health > 0 AND username != ? ORDER BY RAND() LIMIT 1`,[username], function(error, results, fields){
                myResolve(results[0]); // everything from the random person
            })
        }
        else{
            connection.query(`SELECT * FROM fightclubstats WHERE username = ?`, [target], function(error, results, fields){
                if (results[0] == undefined){
                    myReject("The person is not in");
                }
                else {
                    myResolve(results[0]);
                }
            })       
        }
    });
    return usrstats;
}

module.exports = {getUserStats}