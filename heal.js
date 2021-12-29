let heal = function(target, client, username){
    connection.query(`SELECT username FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields) {
        if (results.length === 0){
            client.say(target, `${username} is not even here KUKW but feel free to $join`);
        }
        else{
            connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields){
                if (results[0].health <= 0){
                    client.say(target, `KUKW Dead people can't go to hospital try $revive`);
                }
                else{
                    connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields){
                        if (results[0].money < 100){
                            client.say(target, `doctor killed you after seeing you didnt have money to pay him PepeLoser Stab`);
                            connection.query(`UPDATE fightclubstats SET health = 0 WHERE username = ?`, [username], function (error, results, fields){
                            })
                        }
                        else{
                            connection.query(`UPDATE fightclubstats SET money = money - 100, health = health + 40 WHERE username = ?`, [username], function(error, results, fields){
                                connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                                    client.say(target, `twiceLove you got healed by ❤40 and now has ❤${results[0].health}`);
                                })
                            })
                        }
                    })
                }
            })
        }
    })
}
module.exports = {heal};