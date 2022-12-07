let diceroll = require(`./functions.js`).diceroll;
let updateUserStats = require(`./users/updateUserStats.js`).updateUserStats;
let getUserStats = require(`./users/getUserStats`).getUserStats;
let updateSlotStats = require(`./slotmachine/updateSlotStats.js`).updateSlotStats;

const storage = {
    food : {
        price : 30, 
        health : 10,
        energy : 10,
        fat : 10,
        props : '[+10❤] [+10⚡] [+10 fat ]',
    },
    drink : {
        price : 15, 
        health : 2,
        energy : 5,
        fat : 3,
        props : '[+2❤] [+5⚡] [+3 fat ]',
    },
    cigarette : {
        price : 5, 
        health : -80,
        energy : 20,
        fat : 0,
        props : '[-80❤] [+20⚡]',
    },
    energy_drink : {
        price : 45,
        health : 0,
        energy : 150,
        fat : 0,
        props : '[+150⚡] [1hr]',
    },
    weed : {
        price : 10,
        health : -5,
        energy : -30,
        fat : -50,
        props : '[-5❤] [-30⚡] [-50 fat ]'
    }
};

let store = function(target, client, username, message, sorbuy){

    if (sorbuy == 1){//Checks if person wants to see store or to buy if == 1 shows store
        for (let x in storage){
            client.say(target, `${x} : $${storage[x].price} ${storage[x].props}`);
        }
    }

    else {

        trimmssg = message.split(' ');
        choice = trimmssg[1];
        if (!choice) choice = undefined;
        getUserStats(username, username).then(function(userstats){
            
            if (userstats.health <= 0){
                return client.say(target, `KUKW Dead people can't go shopping try $revive`);
            }

            if (storage[choice] == undefined){
                return client.say(target, `${username} you can't buy that KUKW`);
            }

            if (userstats.money < storage[choice].price){
                var rolled = diceroll();
                
                if (rolled >= 65){
                    updateUserStats(username, storage[choice].health, storage[choice].energy, 0, 0, storage[choice].fat, 0).then(function(){
                        return client.say(target, `WideHardo Clap ${username} cops saw you trying not to pay but you escaped`);
                    })
                }
                else{
                    updateUserStats(username, -userstats.health, 0, 0, 0, 0, 0).then(function(){
                        return client.say(target, `monkaGun monkaH ${username} police caught you trying to steal and you got murdered in jail`);
                    })
                }
            }

            else{

                if (choice == 'energy_drink'){
                    connection.query('SELECT * FROM persons WHERE username = ? AND reason = ?', [username, 'energy_drink'], function(error, results, fields){
                        if (results != undefined){
                            if (results.length != 0){
                                return client.say(target, `XQC ${username} wait for cooldown`);    
                            }
                        }
                        updateUserStats(username, storage[choice].health, storage[choice].energy, -storage[choice].price, 0, storage[choice].fat, 0).then(function(){
                            getUserStats(username, username).then(function(userstats){
                                updateSlotStats(storage[choice].price);
                                client.say(target, `DooooooooogLookingSussyAndCute ${username} you drank 5 cans of energy drink [+150⚡] [1hr] [${userstats.money}💰]`);
                            })
                        })
                        let time = new Date();
                        time.setHours(time.getHours() + 1);
                        return connection.query(`INSERT INTO persons (username, timelog, reason) VALUES (?, ?, ?)`, [username, time, 'energy_drink'], function(error, results, fields) {})
                    })
                }

                else{
                    updateUserStats(username, storage[choice].health, storage[choice].energy, -storage[choice].price, 0, storage[choice].fat, 0).then(function(){
                        getUserStats(username, username).then(function(){
                            updateSlotStats(storage[choice].price);
                        })
                    })
                }

                switch(choice){

                    case "food":
                        getUserStats(username, username).then(function(userstats){
                            client.say(target, `peepoFat ${username} you had a nice meal [+10❤] [+10⚡] [+10 fat ] [${userstats.money}💰]`);
                        })
                        break;
                    case "drink":
                        getUserStats(username, username).then(function(userstats){
                            client.say(target, `OFFLINECHAT WineTime ${username} you had a glass of wine and [+2❤] [+5⚡] [+3 fat ] [${userstats.money}💰]`);
                        })
                        break;

                    case "cigarette":
                        getUserStats(username, username).then(function(userstats){
                            client.say(target, `monkeSmoke ${username} you smoked a whole pack of cigarettes [-80❤] [+20⚡] [${userstats.money}💰]`);
                            if (userstats.health <= 0){
                                client.say(target, `${username} died reeferSad`);
                            }
                        })
                        break;
                        
                    case "weed":
                        getUserStats(username, username).then(function(userstats){
                            client.say(target, `SMOKE ${username} you smoked some weed Duckass [-5❤] [-30⚡] [-50 fat ] [${userstats.money}💰]`);
                            if (userstats.health <= 0){
                                client.say(target, `${username} died reeferSad`);
                            }
                        })
                        break;

                    default:
                        break;
                }
            }
        }).catch(function(){
            return client.say(target, `${username} is not even here KUKW but feel free to $join`);
        })
    }    
}

module.exports = {store};