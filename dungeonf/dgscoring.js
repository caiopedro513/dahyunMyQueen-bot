let getUserStats = require(`../users/getUserStats.js`).getUserStats;
let getMobStats = require(`./getMobStats.js`).getMobStats;

let scoringd = function(username, tgtmob){
    let scored = new Promise (function(myResolve, myReject){

        getUserStats(username, username).then(function(userStats){

            getMobStats(tgtmob).then(function(mobStats){

                let usrscore = (userStats.strength + (userStats.smartness * 0.25) + (userStats.energy / 2)) - (userStats.fat * 0.25);
                let mobscore = (mobStats.strength + (mobStats.smartness * 0.25));
                let score = usrscore - mobscore;
                myResolve(score);

            }).catch(function(myReject){console.log(myReject)})
            
        }).catch(function(myReject){console.log(myReject)})
    })
    return scored
}

module.exports = {scoringd}