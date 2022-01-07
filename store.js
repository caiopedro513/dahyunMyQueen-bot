let diceroll = require(`./functions.js`).diceroll;

const storage = {
    food : 30,
    drink : 15,
    cigarette : 5
};

let store = function(target, client, username, message, sorbuy){
    if (sorbuy == 1){  
        for (let x in storage){
            client.say(target, `${x} : $${storage[x]}`);
        }
    }
    else {
        trimmssg = message.split(' ');
        choice = trimmssg[1];
        if (!choice) choice = undefined;
        connection.query(`SELECT username FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields) {
            if (results.length === 0){
            client.say(target, `${username} is not even here KUKW but feel free to $join`);
            }
            else{
                connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields){
                    if (results[0].health <= 0){
                        client.say(target, `KUKW Dead people can't go shopping try $revive`);
                    }
                    else if(storage[choice] != undefined){
                        connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields){
                            if (results[0].money < storage[choice]){
                                var rolled = diceroll();
                                if (rolled >= 65){
                                    connection.query(`UPDATE fightclubstats SET energy = energy - 10 WHERE username = ?`, [username], function(error, results, fields){
                                        client.say(target, `WideHardo Clap ${username} cops saw you trying not to pay but you escaped`);
                                    })
                                }
                                else{
                                    connection.query(`UPDATE fightclubstats SET health = 0 WHERE username = ?`, [username], function (error, results, fields){
                                        client.say(target, `monkaGun monkaH ${username} police caught you trying to steal and you got murdered in jail`);
                                    })
                                }
                            }
                            else{
                                switch(choice){
                                    case "food":
                                        connection.query(`UPDATE fightclubstats SET money = money - ?, health = health + 10, energy = energy + 10 WHERE username = ?`, [storage[choice] ,username], function(error, results, fields){
                                            connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                                                client.say(target, `peepoFat ${username} you had a nice meal [+10❤] [+10⚡] [${results[0].money}💰]`);
                                            })
                                        })
                                        break;
                                    case "drink":
                                        connection.query(`UPDATE fightclubstats SET money = money - ?, health = health + 2, energy = energy + 5 WHERE username = ?`, [storage[choice] ,username], function(error, results, fields){
                                            connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                                                client.say(target, `OFFLINECHAT WineTime ${username} you had a glass of wine and [+2❤] [+5⚡] [${results[0].money}💰]`);
                                            })
                                        })
                                        break;
                                    case "cigarette":
                                        connection.query(`UPDATE fightclubstats SET money = money - ?, health = health - 80, energy = energy + 20 WHERE username = ?`, [storage[choice] ,username], function(error, results, fields){
                                            connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                                                client.say(target, `monkeSmoke ${username} you smoked a whole pack of cigarettes [-80❤] [+20⚡] [${results[0].money}💰]`);
                                            })
                                        })
                                        connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
                                            if (results[0].health <= 0){
                                                client.say(target, `${username} died reeferSad`);
                                            }
                                        })
                                    default:
                                        break;
                                }
                            }
                        })
                    }
                    if (storage[choice] == undefined){
                        client.say(target, `${username} you can't buy that KUKW`);
                    }
                })
            }
        })
    }    
}

module.exports = {store};