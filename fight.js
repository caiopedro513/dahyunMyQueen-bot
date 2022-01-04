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
            
            
        }).catch(function(myReject) { //if user is not in
            client.say(target, myReject);
        })

    }).catch(function(myReject){//if person is not in
        client.say(target, myReject);
    })
}

module.exports = {fight};