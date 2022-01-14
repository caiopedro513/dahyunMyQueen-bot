let diceroll = require(`./functions.js`).diceroll;
let updateUserStats = require(`./users/updateUserStats.js`).updateUserStats;
let getUserStats = require(`./users/getUserStats`).getUserStats;

const storage = {
    food : {
        price : 30, 
        props : '[+10❤] [+10⚡]'
    },
    drink : {
        price : 15, 
        props : '[+2❤] [+5⚡]'
    },
    cigarette : {
        price : 5, 
        props : '[-80❤] [+20⚡]'
    }
};

let store = function(target, client, username, message, sorbuy){
    if (sorbuy == 1){  
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
                    updateUserStats(username, 0, -10, 0, 0).then(function(){
                        return client.say(target, `WideHardo Clap ${username} cops saw you trying not to pay but you escaped`);
                    })
                }
                //else
                updateUserStats(username, -userstats.health, 0, 0, 0).then(function(){
                    return client.say(target, `monkaGun monkaH ${username} police caught you trying to steal and you got murdered in jail`);
                })
            }

            else{
                switch(choice){
                    case "food":
                        updateUserStats(username, 10, 10, -storage[choice].price, 0).then(function(){
                            getUserStats(username, username).then(function(userstats){
                                client.say(target, `peepoFat ${username} you had a nice meal [+10❤] [+10⚡] [${userstats.money}💰]`);
                            })
                        })
                        break;
                    case "drink":
                        updateUserStats(username, 2, 5, -storage[choice].price, 0).then(function(){
                            getUserStats(username, username).then(function(userstats){
                                client.say(target, `OFFLINECHAT WineTime ${username} you had a glass of wine and [+2❤] [+5⚡] [${userstats.money}💰]`);
                            })
                        })
                        break;

                    case "cigarette":
                        updateUserStats(username, -80, 20, -storage[choice].price, 0).then(function(){
                            getUserStats(username, username).then(function(userstats){
                                client.say(target, `monkeSmoke ${username} you smoked a whole pack of cigarettes [-80❤] [+20⚡] [${userstats.money}💰]`);
                                if (userstats.health <= 0){
                                    client.say(target, `${username} died reeferSad`);
                                }
                            })
                        })
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