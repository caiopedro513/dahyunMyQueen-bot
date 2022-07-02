let scoringd = require(`./dgscoring.js`).scoringd;
let getMobStats = require(`./getMobStats.js`).getMobStats;
let getUserStats = require(`../users/getUserStats.js`).getUserStats;
let updateUserStats = require(`../users/updateUserStats.js`).updateUserStats;
let diceroll = require(`../functions.js`).diceroll;

let dgfight = function(username, tgtmob, mssg, client, target){
    let fightd = new Promise (function(myResolve, myReject){
        let numrol = diceroll();
        getUserStats(username, username).then(function(userstats) {
            if (userstats.health <= 0){
                myReject(`KUKW you can't fight you're dead but you can $revive`);
            }
            if (userstats.energy <= 0){
                myReject(`KUKW ${username} you're too tired`);
            }
        }).catch(function(myReject) {
            return client.say(target, `KUKW ${username} you are not in try to $join`);
        })
        getMobStats(tgtmob).then(function(mobStats){}).catch(function(myReject){
            return client.say(target, myReject);
        })

        scoringd(username, tgtmob).then(function(score){
            let dmg = abs(score) / 100;

            if (score == 0){
                return client.say(target, `KUKW both ${username} and ${tgtmob} passed out while fighting`);
            }

            if (score > 0){
                dmg = dmg / 2;
                chances = 100 - mobStats.probability
                loot = mobStats.money
                if (numrol >= chances){
                    loot = loot * mobStats.multiplier
                }
                updateUserStats(username, -dmg, -25, loot, 10, 0, 0).then(function(){
                    return client.say(target, `BASED ${username} beat ${tgtmob} up and got $${loot} [-${dmg}❤] [-25⚡]`)
                })
            }

            updateUserStats(username, -dmg, -30, 0, 20, 0, 0).then(function(){
                client.say(target, `LULE ${username} is garbage and lost to ${tgtmob} [-${dmg}❤] [-30⚡]`);
            })

            getUserStats(username, username).then(function(userStats){
                if (userStats.health <= 0){
                    return client.say(target, `FeelsWeakMan ${username} died`)
                }
            })
        })
    })
    return fightd
}

module.exports = {dgfight}