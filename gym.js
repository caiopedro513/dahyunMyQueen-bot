let pricing = require(`./price.js`).pricing;
const { getUserStats } = require("./users/getUserStats");
const { updateUserStats } = require("./users/updateUserStats");
let updateSlotStats = require(`./slotmachine/updateSlotStats.js`).updateSlotStats;

let gym = function(target, client, username){
    getUserStats(username, username).then(function(userstats){

        if (userstats.length === 0){
            return client.say(target, `${username} is not even here KUKW but feel free to $join`);
        }

        if (userstats.health <= 0){
            return client.say(target, `KUKW Dead people can't workout try $revive`);
        }

        if (userstats.energy <= 0){
            return client.say(target, `KUKW you're too tired to workout`);
        }

        pricing(username).then(function(price){

            if (price == 1){

                if (userstats.money < 75){
                    client.say(target, `${username} you got beat up at the gym after trying not to pay peepoSmash`);
                    updateUserStats(username, -30, 0, 0, 0, 0, 0);
                    getUserStats(username, username).then(function(userstats){
                        if (userstats.health <= 0){
                            return client.say(target, `reeferSad ${username} died`);
                        }
                    })
                }

                else{
                    updateUserStats(username, 0, -10, -75, 15, -15, 0);
                    getUserStats(username, username).then(function(userstats){
                        updateSlotStats(75);
                        return client.say(target, `BillyApprove ${username} you worked out really hard great job [+15💪] [-15 fat ] [${userstats.money}💰]`);
                    })
                }
            }
            if (price > 1){
                updateUserStats(username, 0, -10, -price, 15, -15, 0);
                getUserStats(username, username).then(function(userstats){
                    updateSlotStats(price);
                    return client.say(target, `BillyApprove ${username} you worked out really hard great job [+15💪] [-15 fat ] [${userstats.money}💰]`);
                })
            }
        })
    }).catch(function(){
        return client.say(target, `${username} is not even here KUKW but feel free to $join`);
    })
}
module.exports = {gym};