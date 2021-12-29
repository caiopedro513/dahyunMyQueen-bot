let leaderboard = function(target, client, cdl){
    today = new Date();
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
}

module.exports = {leaderboard};