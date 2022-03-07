let getUserStats = require(`./users/getUserStats`).getUserStats;
let updateUserStats = require(`./users/updateUserStats`).updateUserStats;
let diceroll = require(`./functions.js`).diceroll

let study = function(username, client, target){

    getUserStats(username, username).then(function(userstats){

        if (userstats.health <= 0){
            return client.say(target, `DankG ${username} dead people can't study try $revive`);
        }

        if (userstats.energy <= 0){
            return client.say(target, `AlienRave ${username} you're too tired to study`);
        }

        let roll = diceroll();

        if (roll > 10 && roll <= 89){
            updateUserStats(username, 0, -10, 0, 0, 0, 10).then(function(){
                client.say(target, `${username} Nerd Mountains are formed by movement within the Earth's crust. The crust itself is made up of several large plates,
                 called tectonic plates, which are free floating. These huge chunks of the Earth's crust move within molten rock called magma, which allows them to shift and 
                 collide over time [+ 10 5Head ] [- 10 ⚡]`);
            })
        }

        if (roll >= 90){
            updateUserStats(username, 0, -15, 0, 0, 0, 20).then(function(){
                client.say(target, `${username} :Nerd: ax2 + bx + c = 0  [+ 20 5Head ] [- 15 ⚡]`);
            })
        }

        if (roll <= 10){
            updateUserStats(username, 0, -10, 0, 0, 0, 5).then(function(){
                client.say(target, `${username} PeepoLearnin Verbs ending in -ar, like falar (to speak):

                eu falei — I speak
                
                você/ele/ela falou — you/he/she speak(s)
                
                nós falamos — we speak
                
                vocês/eles/elas falaram — you (plural)/they (male or mixed gender)/they (females) speak
                
                [+ 5 5Head ] [- 10  ⚡]`);

            })
        }

        if (userstats.energy <= 3){
            let rroll = Math.floor(Math.random() * 1001);
            if (rroll <= 5){
                updateUserStats(username, 0, 0, -50, 0, 0, 0).then(function(){
                    return client.say(target, `HEHEHEHE you got too tired, fell asleep while studying and got robbed [-$50]`);
                })
            }
        }
        
        
    }).catch(function(myReject){//if person is not in
        client.say(target, myReject);
    })

}

module.exports = {study}