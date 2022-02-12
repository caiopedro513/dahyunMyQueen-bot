let revive = function(target, client, username){
    connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields){
        if (results[0].health > 0){
            client.say(target, `you're not dead KUKW`);
        }
        else{
            connection.query(`UPDATE fightclubstats SET money = 100, health = 100, strength = 25, energy = 25, fat = 10, smartness = 0 WHERE username = ?`, [username], function (error, results, fields){
                connection.query('DELETE FROM persons WHERE username = ?', [username], function(error, results, fields){
                    client.say(target, `POGGING ${username} is back to life`);
                })
            })
        }
    })
}

module.exports = {revive};