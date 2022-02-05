let getUserStats = require(`./users/getUserStats`).getUserStats;
let updateUserStats = require(`./users/updateUserStats`).updateUserStats;
let diceroll = require(`./functions.js`).diceroll;
let updateSlotStats = require(`./slotmachine/updateSlotStats.js`).updateSlotStats;

const hotels = {
    expensive : {
        price : 450,
        energy : 100,
        props : '[1hr]'
    },
    cheap : {
        price : 15,
        energy : 15,
        props : '[40min]'
    }
};

let sleep = function(username, porbuy, client, target, message){  

    trimmssg = message.split(' ');
    choice = trimmssg[1];
    if (!choice) choice = undefined;

    if (porbuy == 'price'){
        for (let x in hotels){
            client.say(target, `${x} : $${hotels[x].price} [+${hotels[x].energy}⚡] ${hotels[x].props}`);
        }
        return
    }

    connection.query('SELECT * FROM persons WHERE username = ? AND reason = ?', [username, 'sleep'], function(error, results, fields){
        if (results != undefined){
            if (results.length != 0){
                return client.say(target, `XQC ${username} wait for cooldown`);    
            }
        }
        getUserStats(username, username).then(function(userstats){
            if (userstats.health <= 0){
                return client.say(target, `monkaX Dead people can't go sleep $revive`);
            }

            if (hotels[choice] == undefined){
                return client.say(target, `${username} there's no hotel with that name lmao`);
            }
            
            switch(choice){
                case "expensive" :
                    //not paid
                    if (userstats.money < hotels[choice].price){
                        let rolled = diceroll();
                        if (rolled >= 65){
                            updateUserStats(username, 0, hotels[choice].energy, 0, 0, 0).then(function(){
                                return client.say(target, `Widecycle ${username} you sneaked in the luxury hotel and slept for free [+${hotels[choice].energy}⚡]`);
                            })
                        }
                        else{
                            updateUserStats(username, -userstats.health, 0, 0, 0, 0).then(function(){
                                return client.say(target, `HEHEHEHE ${username} police caught you trying to sneak into hotel and you got murdered in jail`);
                            })
                        }
                    }
                    //paid
                    else{
                        updateUserStats(username, 0, hotels[choice].energy, -hotels[choice].price, 0, 0).then(function(){
                            updateSlotStats(hotels[choice].price);
                            return client.say(target, `TwiceGood ${username} you had a great night and slept like a baby [+${hotels[choice].energy}⚡]`)
                        })
                    }
                    break;

                case "cheap" :
                    //not paid
                    if (userstats.money < hotels[choice].price){
                        let rolled = diceroll();
                        if (rolled >= 65){
                            updateUserStats(username, 0, hotels[choice].energy, 0, 0, 0).then(function(){
                                return client.say(target, `Goose ${username} you sneaked in the shit hotel and slept for free [+${hotels[choice].energy}⚡]`);
                            })
                        }
                        else{
                            updateUserStats(username, -userstats.health, 0, 0, 0, 0).then(function(){
                                return client.say(target, `HEHEHEHE ${username} police caught you trying to sneak into hotel and you got murdered in jail`);
                            })
                        }
                    }
                    //paid
                    else{
                        rolled = diceroll();
                        //robbed
                        if (rolled >= 95){
                            updateUserStats(username, -25, -15, -userstats.money, 0, 0).then(function(){
                                getUserStats(username, username).then(function(userstats){
                                    updateSlotStats(hotels[choice].price);
                                    client.say(target, `GOTTEM ${username} while asleep at the shit hotel you got robbed and beat up [-25❤] [-15⚡] [$${userstats.money}]`);
                                    if (userstats.health <= 0){
                                        client.say(target, `${username} died reeferSad`);
                                    }
                                })
                            })
                        }
                        //not robbed
                        else{
                            updateUserStats(username, 0, hotels[choice].energy, -hotels[choice].price, 0, 0).then(function(){
                                updateSlotStats(hotels[choice].price);
                                return client.say(target, `zoodasaGood ${username} was a shit bed all stained but you slept in the end [+${hotels[choice].energy}⚡]`);
                            })
                        }
                    }
                    break;

                default :
                    break;
            }

            let time = new Date();
            time.setHours(time.getHours() + 1);
            connection.query(`INSERT INTO persons (username, timelog, reason) VALUES (?, ?, ?);`, [username, time, 'sleep'], function(error, results, fields) {
            })

        }).catch(function(){
            return client.say(target, `${username} is not even here KUKW but feel free to $join`);
        })
    })
}


module.exports = {sleep};