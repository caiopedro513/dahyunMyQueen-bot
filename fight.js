let scoring = require(`./score.js`).scoring;

let fight = function(target, client, username, mssg){
    var cmdsplt;
    var robpers;
    var loot;
    var beaten = 0;
    if (mssg.indexOf("@") === -1){
        cmdsplt = mssg.split(' ');
        robpers = cmdsplt[1];
    }
    if (mssg.indexOf("@") > -1){
        cmdsplt = mssg.split('@');
        cmdsplt = cmdsplt[1].split(' ');
        cmdsplt = cmdsplt[0].trim();
        robpers = cmdsplt;
    }
    var numrol = Math.floor(Math.random() * 27);
    if (numrol == 0) numrol += 1;
    if (!robpers) {
        connection.query(`SELECT username FROM fightclubstats WHERE id = ?`, [numrol], function(error, results, fields){
            robpers = results[0].username;
        })
    }
    if (robpers != username){
        connection.query(`SELECT username FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields) {
            if (results.length === 0){
                client.say(target, `you're not even here KUKW but you can $join`)
            }
            else{
                connection.query(`SELECT username FROM fightclubstats WHERE username = ?`, [robpers], function (error, results, fields) {
                    if (results.length === 0){
                        client.say(target, `the person is not even in KUKW`)
                    }
                    else{
                        scoring(username, robpers).then(function(score){ //when scoring() is done
                            connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields){
                                if (results[0].health <= 0){
                                    client.say(target, `KUKW you can't fight you're dead but you can $revive`)
                                }
                                else{
                                    connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [robpers], function (error, results, fields){
                                        if (results[0].health <= 0){
                                            client.say(target, `reeferSad the person is already dead`)
                                        }
                                        else{
                                            connection.query(`SELECT energy FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                                                if (results[0].energy <= 0){
                                                    client.say(target, `KUKW ${username} you're too tired`);
                                                }
                                                else{
                                                    connection.query(`SELECT energy FROM fightclubstats WHERE username = ?`, [robpers], function(error, results, fields){
                                                        if (results[0].energy <= 0){
                                                            client.say(target, `PogO ${robpers} is too tired`);
                                                        }
                                                        else{
                                                            if (score < 0){
                                                                if (numrol >= 100 - (score*(-1))){
                                                                    connection.query(`UPDATE fightclubstats SET money = money - 50, health = health - 20, energy = energy - 25 WHERE username = ?`, [username], function (error, results, fields) {
                                                                        client.say(target, `${robpers} beat ${username} up and got $50 KUKW`);
                                                                        beaten = 1;
                                                                    })
                                                                }
                                                                if (numrol < 100 - (score*(-1))){
                                                                    connection.query(`UPDATE fightclubstats SET money = money - 50, health = health - 20, energy = energy - 20 WHERE username = ?`, [robpers], function (error, results, fields) {
                                                                        client.say(target, `${username} got hit but managed to beat ${robpers} and get $50 WideHardo Clap`);
                                                                    })
                                                                    connection.query(`UPDATE fightclubstats SET money = money + 50, health = health - 10, energy = energy - 25 WHERE username = ?`, [username], function (error, results, fields) {
                                                                    })
                                                                }
                                                            }
                                                            if (score > 0){
                                                                if (numrol >= 100 - score){
                                                                    connection.query(`UPDATE fightclubstats SET money = money - 50, health = health - 20, energy = energy - 20 WHERE username = ?`, [robpers], function (error, results, fields) {
                                                                        client.say(target, `${username} got hit but managed to beat ${robpers} and get $50 WideHardo Clap`);
                                                                    })
                                                                    connection.query(`UPDATE fightclubstats SET money = money + 50, health = health - 10, energy = energy - 25, strength = strength + 10 WHERE username = ?`, [username], function (error, results, fields) {
                                                                    })
                                                                }
                                                                if (numrol < 100 - score){
                                                                    connection.query(`UPDATE fightclubstats SET money = money - 50, health = health - 20, energy = energy - 25, strength = strength + 5 WHERE username = ?`, [username], function (error, results, fields) {
                                                                        client.say(target, `${robpers} beat ${username} up and got $50 KUKW`);
                                                                        beaten = 1;
                                                                    })
                                                                    connection.query(`UPDATE fightclubstats SET money = money + 50, health = health - 10, energy = energy - 20 WHERE username = ?`, [robpers], function (error, results, fields) {
                                                                    })
                                                                }
                                                            }
                                                            if (score == 0){
                                                                if (numrol >= 49){
                                                                    connection.query(`UPDATE fightclubstats SET money = money - 50, health = health - 20, energy = energy - 20 WHERE username = ?`, [robpers], function (error, results, fields) {
                                                                        client.say(target, `${username} got hit but managed to beat ${robpers} and get $50 WideHardo Clap`);
                                                                    })
                                                                    connection.query(`UPDATE fightclubstats SET money = money + 50, health = health - 10, energy = energy - 25 WHERE username = ?`, [username], function (error, results, fields) {
                                                                    })
                                                                }
                                                                if (numrol < 49){
                                                                    connection.query(`UPDATE fightclubstats SET money = money - 50, health = health - 20, energy = energy - 25 WHERE username = ?`, [username], function (error, results, fields) {
                                                                        client.say(target, `${robpers} beat ${username} up and got $50 KUKW`);
                                                                        beaten = 1;
                                                                    })
                                                                    connection.query(`UPDATE fightclubstats SET money = money + 50, health = health - 10, energy = energy - 20 WHERE username = ?`, [robpers], function (error, results, fields) {
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    })
                                                }
                                            })
                                            connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields){
                                                var loot;
                                                if (results[0].health <= 0){
                                                    connection.query(`SELECT health from fightclubstats WHERE username = ?`, [robpers], function (error, results, fields){
                                                        if (results[0].health <= 0){
                                                            client.say(target, `KUKW both ${username} and ${robpers} died, a homeless person walking by got their money`)
                                                            connection.query(`UPDATE fightclubstats SET health = 0, money = 0, strength = 0 WHERE username = ?`, [username], function (error, results, fields){
                                                            })
                                                            connection.query(`UPDATE fightclubstats SET health = 0, money = 0, strength = 0 WHERE username = ?`, [robpers], function (error, results, fields){
                                                            })
                                                        }
                                                        if (results[0].health > 0){
                                                            if (beaten === 1){
                                                                client.say(target, `after getting beat up ${username} got murdered and looted by ${robpers} reeferSad`);
                                                            }
                                                            else{
                                                                client.say(target, `${robpers} woke up after getting beat up and murdered ${username} PepeLoser Stab`);
                                                            }
                                                            connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                                                                loot = results[0].money;
                                                                if (loot >= 0){
                                                                    connection.query(`UPDATE fightclubstats SET money = money + ${loot} WHERE username = ?`, [robpers], function(error, results, fields){
                                                                    })
                                                                    connection.query(`UPDATE fightclubstats SET money = money - ${loot} WHERE username = ?`, [username], function(error, results, fields){
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                                if (results[0].health > 0){
                                                    connection.query(`SELECT health FROM fightclubstats WHERE username = ?`,[robpers], function (error, results, fields){
                                                        if (results[0].health <= 0){
                                                            if (beaten === 1){
                                                                client.say(target, `${username} woke up after getting beat up and murdered ${robpers} PepeLoser Stab`);
                                                            }
                                                            else{
                                                                client.say(target, `after getting beat up ${robpers} got murdered and looted by ${username} reeferSad`);
                                                            }
                                                            connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [robpers], function(error, results, fields){
                                                                loot = results[0].money;
                                                                if (loot >= 0){
                                                                    connection.query(`UPDATE fightclubstats SET money = money + ${loot} WHERE username = ?`, [username], function(error, results, fields){
                                                                    })
                                                                    connection.query(`UPDATE fightclubstats SET money = money - ${loot} WHERE username = ?`, [robpers], function(error, results, fields){
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
                            })
                        });
                        
                    }
                })
            }
        })
    }
    else{
        client.say(target, `KUKW you can't fight yourself`);
    }
}

module.exports = {fight};