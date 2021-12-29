let namecheck = function(target, client, username){
    connection.query(`SELECT username FROM fightclubstats WHERE username = ?`, [username], function (error, results, fields) {
        if (results.length === 0){
            client.say(target, `not here :( `);
        }
        else{
            client.say(target, `you're here :) `);
        }
    })
}

module.exports = {namecheck};