let health = function(target, client, username, mssg){
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
    connection.query(`SELECT username FROM fightclubstats WHERE username = ?`, [tgtpers], function (error, results, fields) {
        if (results.length === 0){
            client.say(target, `${tgtpers} is not even here KUKW but feel free to $join`);
        }
        else{
            connection.query(`SELECT health FROM fightclubstats WHERE username = ?`, [tgtpers], function(error, results, fields){
                client.say(target, `${tgtpers} has  ❤${results[0].health}`);
            })
        }
    })
}

module.exports = {health};