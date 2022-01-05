let join = function(target, client, username){
    connection.query(`SELECT username, id FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields) {
        if (results.length === 0){
            connection.query(`INSERT INTO fightclubstats (username, health, strength, money, energy) VALUES (?, 100, 25, 1000, 100)`, [username], function(error, results, fields) {
                client.say(target, `added OkayChamp`);
            })
        }
        else{
            client.say(target, `already here KUKW`);
        }
    })
}

module.exports = {join};