let getUserStats = require(`./users/getUserStats`).getUserStats;
let updateUserStats = require(`./users/updateUserStats`).updateUserStats;

let pray = function(target, client, username){
    getUserStats(username, username).then(function(userstats) {}).catch(function(myReject) {
        return client.say(target, `KUKW ${username} you are not in try to $join`);
    })
    getUserStats(username, username).then(function(userstats){
        if (userstats.health <= 0){
            return client.say(target, `reeferSad dead people can't pray, perhaps meet with god and $revive`);
        }
        connection.query('SELECT * FROM persons WHERE username = ? AND reason = ?', [username, 'pray'], function(error, results, fields){
            if (results != undefined){
                if (results.length != 0){
                    return client.say(target, `XQC ${username} wait for cooldown`);    
                }
            }
            updateUserStats(username, +10, 0, 0, 0, 0, 0).then(function(){
                client.say(target, `PrayingToLordEverySundayEvening ${username} you prayed for 6 hours straight [+10❤] [2hr]`);
                let time = new Date();
                time.setHours(time.getHours() + 2);
                return connection.query(`INSERT INTO persons (username, timelog, reason) VALUES (?, ?, ?)`, [username, time, 'pray'], function(error, results, fields) {})
            })
        })
    })
}
module.exports = {pray};