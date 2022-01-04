let scoring = require(`./score.js`).scoring;
let getUserStats = require(`./users/getUserStats.js`).getUserStats;

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
            })
            
        }).catch(function(myReject) { //if user is not in
            client.say(target, myReject);
        })

    }).catch(function(myReject){//if person is not in
        client.say(target, myReject);
    })
}

module.exports = {fight};