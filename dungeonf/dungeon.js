let getUserStats = require(`../users/getUserStats.js`).getUserStats;
let mobtarget = require(`./mobtgt.js`).mobtarget;
let dgfight = require(`./dgfight.js`).dgfight;

let dungeon = function(mssg, target, client, username){

    getUserStats(username, username).then(function(userStats){
        if (userStats.health <= 0){
            return client.say(target, `KUKW ${username} you can't fight you're dead but you can $revive`)
        }
    }).catch(function(myReject){
        return client.say(target, myReject)
    })
    
    mobtarget(mssg, username).then(function(mobs){
        for (let i = 0; i < mobs.length; i++){
            getUserStats(username, username).then(function(userStats){

                if (userStats.energy <= 0){
                    return client.say(target, `KUKW ${username} you're too tired`);
                }

                if (userStats.health <= 0){
                    return client.say(target, `KUKW you can't fight you're dead but you can $revive`);
                }

                dgfight(username, mobs[i].name, mssg, client, target);
            })
        }
    }).catch(function(myReject){
        return client.say(target, myReject)
    })
}

module.exports = {dungeon}