let pricing = require(`./price.js`).pricing;

let gym = function(target, client, username){
    connection.query(`SELECT username FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields) {
        if (results.length === 0){
            client.say(target, `${username} is not even here KUKW but feel free to $join`);
        }
        else{
            connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields){
                if (results[0].health <= 0){
                    client.say(target, `KUKW Dead people can't workout try $revive`);
                }
                else{
                    connection.query(`SELECT energy FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                        if (results[0].energy <= 0){
                            client.say(target, `KUKW you're too tired to workout`);
                        }
                        if (results[0].energy > 0){
                            pricing(username).then(function(price){
                                if (price == 1){
                                    connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields){
                                        if (results[0].money < 75){
                                            client.say(target, `${username} you got beat up at the gym after trying not to pay peepoSmash`);
                                            connection.query(`UPDATE fightclubstats SET health = health - 30 WHERE username = ?`, [username], function (error, results, fields){
                                            })
                                            connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                                                if (results[0].health <= 0){
                                                    client.say(target, `reeferSad ${username} died`);
                                                }
                                            })
                                        }
                                        else{
                                            connection.query(`UPDATE fightclubstats SET money = money - 75, strength = strength + 15, energy = energy - 10 WHERE username = ?`, [username], function(error, results, fields){
                                                connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                                                    client.say(target, `BillyApprove ${username} you worked out really hard great job +15💪 💰${results[0].money}`);
                                                })
                                            })
                                        }
                                    })
                                }
                                if (price > 1){
                                    connection.query(`UPDATE fightclubstats SET money = money - ?, strength = strength + 15, energy = energy - 10 WHERE username = ?`, [price, username], function(error, results, fields){
                                        connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                                            client.say(target, `BillyApprove ${username} you worked out really hard great job +15💪 💰${results[0].money}`);
                                        })
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}
module.exports = {gym};