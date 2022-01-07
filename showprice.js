const { getUserStats } = require("./users/getUserStats")
let pricing = require(`./price.js`).pricing;

let showprice = function(target, client, username){
    getUserStats(username, username).then(function(userstats){
        pricing(username).then(function(price){
            if (price == 1){
                return client.say(target, `Gym : $75 | Heal : $100 | Store : type $store`);
            }
            return client.say(target, `Gym : $${price} | Heal : $${price} | Store : type $store`);
        })
    })
}

module.exports = {showprice}