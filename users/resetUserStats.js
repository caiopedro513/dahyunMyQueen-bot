let resetUserStats = function(username){
    return new Promise(function(Resolve, Reject){
        connection.query(`UPDATE fightclubstats SET money = 0, health = 0, energy = 0, fat = 0, smartness = 0 WHERE username = ?`, [money, health, energy, username], function (error, results, fields) {
            Resolve();
        })
    })
}

module.exports = {resetUserStats}