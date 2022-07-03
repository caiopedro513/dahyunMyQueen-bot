let getUserStats = require(`../users/getUserStats.js`).getUserStats;
let getMobStats = require(`./getMobStats.js`).getMobStats;

let scoringd = function(username, tgtmob){
    let scored = new Promise (function(myResolve, myReject){

        getUserStats(username, username).then(function(userStats){

            getMobStats(tgtmob).then(function(mobStats){

                let usrscore = (userStats.strength + (userStats.smartness * 0.25) + (userStats.energy / 2)) - (userStats.fat * 0.25);
                let mobscore = (mobStats.strength + (mobStats.smartness * 0.25));
                let score = usrscore - mobscore;

                if (score > 0){ // if person wins
                    myResolve(1);
                }

                if (score == 0){ // if its a tie
                    myResolve(2);
                }

                if (score < 0){ // if person loses
                    myResolve(0);
                }

            })
            
        })
    })
    return scored
}

module.exports = {scoringd}