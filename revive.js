let getUserStats = require(`./users/getUserStats.js`).getUserStats;
let updateUserStats = require(`./users/updateUserStats.js`).updateUserStats;

let revive = function(target, client, username){
    getUserStats(username, username).then(function(userstats){
        if (userstats.health > 0){
            return client.say(target, `you're not dead KUKW`);
        }
        connection.query(`UPDATE fightclubstats SET money = 100, health = 100, strength = 25, energy = 25, fat = 10, smartness = 0 WHERE username = ?`, [username], function (error, results, fields){
            connection.query('DELETE FROM persons WHERE username = ?', [username], function(error, results, fields){
                client.say(target, `POGGING ${username} is back to life`);
            })
        })

    }).catch(function(myReject){
        return client.say(target, `KUKW ${username} you are not in try to $join`);
    })    
}

module.exports = {revive};