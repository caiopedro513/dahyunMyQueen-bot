let scoring = require(`./score.js`).scoring;
let getUserStats = require(`./users/getUserStats.js`).getUserStats;
let updateUserStats = require(`./users/updateUserStats`).updateUserStats;
let diceroll = require(`./functions.js`).diceroll
let resetUserStats = require(`./users/resetUserStats.js`).resetUserStats;

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
    getUserStats(robpers).then(function(robbedstats){//if robpers is in
        if (username == robbedstats.username){
            return client.say(target, `KUKW you can't fight yourself`);
        }

        getUserStats(username).then(function(userstats) {//if user is in
            if (userstats.health <= 0){
                return client.say(target, `KUKW you can't fight you're dead but you can $revive`);
            }

            if (robbedstats.health <= 0){
                return client.say(target, `reeferSad the person is already dead`);
            }

            if (userstats.energy <= 0){
                return client.say(target, `KUKW ${username} you're too tired`);
            }                

            if (robbedstats.energy <= 0){
                return client.say(target, `PogO ${robpers} is too tired`);
            }

            scoring(username, robpers).then(function(score){ //when scoring() is done
                if (score < 0){
                    numrol = diceroll();

                    if (numrol >= 100 - score*-1){
                        updateUserStats(username, -20, -25, -50).then(function(){
                            client.say(target, `${robpers} beat ${username} up and got $50 KUKW`);
                            beaten = 1;
                        })
                        updateUserStats(robpers, -10, -20, +50);//even without .then it works
                    }

                    else{
                        updateUserStats(robpers, -20, -25, -50).then(function(){
                            client.say(target, `${username} got hit but managed to beat ${robpers} and get $50 WideHardo Clap`);
                        })
                        updateUserStats(username, -10, -20, +50);
                    }
                }

                if (score > 0){
                    if (numrol >= 100 - score){
                        updateUserStats(robpers, -20, -20, -50).then(function(){
                            client.say(target, `${username} got hit but managed to beat ${robpers} and get $50 WideHardo Clap`);
                        })
                        updateUserStats(username, -10, -25, +50);
                    }
                    else{
                        updateUserStats(username, -20, -25, -50).then(function(){
                            client.say(target, `${robpers} beat ${username} up and got $50 KUKW`);
                            beaten = 1;
                        })
                        updateUserStats(robpers, -10, -20, +50);
                        
                    }
                }

                if (score == 0){

                    if (numrol >= 49){
                        updateUserStats(robpers, -20, -20, -50).then(function(){
                            client.say(target, `${username} got hit but managed to beat ${robpers} and get $50 WideHardo Clap`);
                        })
                        updateUserStats(username, -10, -25, +50);
                    }

                    if (numrol < 49){
                        updateUserStats(username, -20, -25, -50).then(function(){
                            client.say(target, `${robpers} beat ${username} up and got $50 KUKW`);
                            beaten = 1;
                        })
                        updateUserStats(robpers, -10, -20, +50);
                    }
                }

                getUserStats(username).then(function(userstats) {
                    var loot;
                    if (userstats.health <= 0){
                        getUserStats(robpers).then(function(robbedstats){
                            if (robbedstats.health <= 0){
                                resetUserStats(username).then(function(){
                                    client.say(target, `KUKW both ${username} and ${robpers} died, a homeless person walking by got their money`)
                                })
                                resetUserStats(robpers);
                            }

                            if (robbedstats.health > 0){
                                if (beaten === 1){
                                    client.say(target, `after getting beat up ${username} got murdered and looted by ${robpers} reeferSad`);
                                }
                                else{
                                    client.say(target, `${robpers} woke up after getting beat up and murdered ${username} PepeLoser Stab`);
                                }
        
                                loot = userstats.money;
                                if (loot >= 0){
                                    updateUserStats(robpers, 0, 0, loot);
                                    updateUserStats(username, 0, 0, -loot)
                                }
                            }
                        })
                            
                    }
                    
                })
            })
            
        }).catch(function(myReject) { //if user is not in
            client.say(target, myReject);
        })

    }).catch(function(myReject){//if person is not in
        client.say(target, myReject);
    })
}

module.exports = {fight};