let id = 26
let join = function(target, client, username){
    connection.query(`SELECT username, id FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields) {
        if (results.length === 0){
            connection.query(`INSERT INTO fightclubstats VALUES(?, 100, 25, 1000, 100, ?)`, [username, id + 1], function(error, results, fields) {
                client.say(target, `added OkayChamp`);
                id += 1;
            })
        }
        else{
            client.say(target, `already here KUKW`);
        }
    })
}

module.exports = {join};