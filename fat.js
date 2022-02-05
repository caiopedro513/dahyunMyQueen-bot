let getUserStats = require(`./users/getUserStats`).getUserStats;

let fat = function(target, client, username, mssg){
    var cmdsplt;
    var tgtpers;
    if (mssg.indexOf("@") === -1){
        cmdsplt = mssg.split(' ');
        tgtpers = cmdsplt[1];
    }
    if (mssg.indexOf("@") > -1){
        cmdsplt = mssg.split('@');
        cmdsplt = cmdsplt[1].split(' ');
        cmdsplt = cmdsplt[0].trim();
        tgtpers = cmdsplt;
    }
    if(!tgtpers) tgtpers = username;
    getUserStats(username, username).then(function(userstats){
        client.say(target, `${tgtpers} has fat ${userstats.fat}`);
    }).catch(function(){
        return client.say(target, `${tgtpers} is not even here KUKW but feel free to $join`);
    })
}

module.exports = {fat};