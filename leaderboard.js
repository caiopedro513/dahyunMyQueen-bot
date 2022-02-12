let leaderboard = function(target, client, cdl, mssg){
    today = new Date();
    cmdsplt = mssg.split(' ');
    search = cmdsplt[1];
    if (!search) search = 'money';
    switch (search){
        case 'money':
            connection.query(`SELECT username, money FROM fightclubstats ORDER BY money DESC LIMIT 10`, function(error, results, fields){
                if (today >= cdl){
                    for (var x = 0; x < results.length; x++){
                        client.say(target, `${x + 1} - ${results[x].username} - $${results[x].money}`);
                    }
                    cdl.setHours( cdl.getHours() + 1);
                }
                else{
                    client.say(target, `KUKW gotta wait for cooldown that i won't tell bcuz i am dumb and can't figure it out <3`);
                }
            })
            break;
        case 'health':
            connection.query(`SELECT username, health FROM fightclubstats ORDER BY health DESC LIMIT 10`, function(error, results, fields){
                if (today >= cdl){
                    for (var x = 0; x < results.length; x++){
                        client.say(target, `${x + 1} - ${results[x].username} - ❤${results[x].health}`);
                    }
                    cdl.setHours( cdl.getHours() + 1);
                }
                else{
                    client.say(target, `KUKW gotta wait for cooldown that i won't tell bcuz i am dumb and can't figure it out <3`);
                }
            })
            break;
        case 'strength':
            connection.query(`SELECT username, strength FROM fightclubstats ORDER BY strength DESC LIMIT 10`, function(error, results, fields){
                if (today >= cdl){
                    for (var x = 0; x < results.length; x++){
                        client.say(target, `${x + 1} - ${results[x].username} - 💪${results[x].strength}`);
                    }
                    cdl.setHours( cdl.getHours() + 1);
                }
                else{
                    client.say(target, `KUKW gotta wait for cooldown that i won't tell bcuz i am dumb and can't figure it out <3`);
                }
            })
            break;
        case 'smartness':
            connection.quer(`SELECT username, smartness FROM fightclubstats ORDER BY smartness DESC LIMIT 10`, function(error, results, fields){
                if (today >= cdl){
                    for (let x = 0; x < results.length; x++){
                        client.say(target, `${x  + 1} - ${results[x].username} - 5Head ${results[x].smartness}`)
                    }
                }
            })
        default:
            client.say(target, `TROLL Tssk we dont do this here`);
    }
}

module.exports = {leaderboard};