let getUserStats = require(`./users/getUserStats`).getUserStats


let stats = function(target, client, username, mssg){
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
    if (!tgtpers) tgtpers = username;
    getUserStats(tgtpers, tgtpers).then(function(userstats){
        if (userstats.length == 0){
            return client.say(target, `KUKW ${tgtpers} is not even feel free to $join`);
        }
        return client.say(target, `Username : ${userstats.username} | Money : ${userstats.money} | Energy : ${userstats.energy} 
        | Health: ${userstats.health} | Strength : ${userstats.strength}`);
    })
}

module.exports = {stats}