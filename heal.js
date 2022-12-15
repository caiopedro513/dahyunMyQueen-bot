let pricing = require(`./price.js`).pricing;
let updateSlotStats = require(`./slotmachine/updateSlotStats.js`).updateSlotStats;
let getUserStats = require(`./users/getUserStats`).getUserStats;
let updateUserStats = require(`./users/updateUserStats`).updateUserStats;
const user = require(`./user.js`).user;

let heal = function(target, client, username){
    getUserStats(username, username).then(function(userstats){}).catch(function(myReject){
        return client.say(target, `KUKW ${username} you are not in try to $join`);
    })
    getUserStats(username, username).then(function(userstats){
        if (userstats.health <= 0){
            return client.say(target, `KUKW Dead people can't go to hospital try $revive`);
        }
        pricing(username).then(function(price){
            if (price < 100){ 
                if (userstats.money < 100){
                    user.setHealth(username, -userstats.health);
                    return client.say(target, `doctor killed you after seeing you didnt have money to pay him PepeLoser Stab`);
                }//username, health, energy, money, strength, fat, smartness
                updateUserStats(username, 40, 0, -100, 0, 0, 0).then(function(){
                    getUserStats(username, username).then(function(userstats){
                        updateSlotStats(100);
                        return client.say(target, `twiceLove you got healed by ❤40 and now has [${userstats.health}❤] [${userstats.money}💰]`);
                    })
                })
            }
            if (price >= 100){
                updateUserStats(username, 40, 0, -price, 0, 0, 0).then(function(){
                    getUserStats(username, username).then(function(userstats){
                        updateSlotStats(price);
                        return client.say(target, `twiceLove you got healed by ❤40 and now has [${userstats.health}❤] [${userstats.money}💰]`);
                    })
                })
            }
        })
    })
}
module.exports = {heal};