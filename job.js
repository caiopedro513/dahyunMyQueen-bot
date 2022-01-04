let job = function(target, client, username, numrol){
    connection.query(`SELECT username FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields) {
        if (results.length === 0){
            client.say(target, `${username} is not even here KUKW but feel free to $join`);
        }
        else{
            connection.query(`SELECT health, energy FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields){
                if (results[0].health <= 0){
                    client.say(target, `Susge dead people can't work (i think) try $revive`);
                }
                else{
                    if (results[0].energy <= 0){
                        client.say(target, `BertinhoOverheat you're too tired to work`)
                    }
                    else{
                        if (numrol >= 15 && numrol < 95){
                            connection.query(`UPDATE fightclubstats SET money = money + 25, energy = energy - 30 WHERE username = ?`, [username], function(error, results, fields){
                                client.say(target, `yeeeeeeeeeeeeeeeeeeees you had a nice day at work +$25 -⚡30`);
                            })
                        }
                        if (numrol >= 95){
                            connection.query(`UPDATE fightclubstats SET money = money + 50, energy = energy - 30 WHERE username = ?`, [username], function(error, results, fields){
                                client.say(target, `SuperIdoldexiaorongdoumeinidetianbayuezhengwudeyangguangdoumeiniyaoyanreai105Cdenididiqingchundezhen 
                                 you had a great day at work and your boss gave you extra money +$50 -⚡30`);
                            })
                        }
                        if (numrol < 15){
                            connection.query(`UPDATE fightclubstats SET money = money - 25, energy = energy - 50 WHERE username = ?`, [username], function(error, results, fields){
                                client.say(target, `rageW it was a nice day in work but you got robbed on your way home -$25 -⚡50`);
                            })
                        }
                    }
                }
            })
        }
    })
}

module.exports = {job}