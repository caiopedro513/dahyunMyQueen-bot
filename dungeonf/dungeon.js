let getUserStats = require(`../users/getUserStats.js`).getUserStats;
let mobtarget = require(`./mobtgt.js`).mobtarget;
let dgfight = require(`./dgfight.js`).dgfight;

let dungeon = function(mssg, target, client, username){
    
    mobtarget(mssg, username).then(function(mobs){
        getUserStats(username, username).then(function(userStats){

            if (userStats.energy <= 0){
                return client.say(target, `KUKW ${username} you're too tired`);
            }

            if (userStats.health <= 0){
                return client.say(target, `KUKW you can't fight you're dead but you can $revive`);
            }

        }).catch(function(myReject){
            return client.say(target, myReject);
        })

        let health = 0;

        getUserStats(username, username).then(function(userStats){
            health += userStats.health;
            for (let i = 0; i < mobs.length; i++){
                if (health > 0){
                    dgfight(username, mobs[i].name, mssg, client, target);
                    health -= mobs[i].dmg;
                }
            }  
        })

    }).catch(function(myReject){
        return client.say(target, myReject)
    })
}

module.exports = {dungeon}