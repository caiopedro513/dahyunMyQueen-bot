let updateUserStats = function(username, health, energy, money){
    let uus = new Promise(function(Resolve, Reject){
        connection.query(`UPDATE fightclubstats SET money = money + ?, health = health + ?, energy = energy + ? WHERE username = ?`, [money, health, energy, username], function (error, results, fields) {
            Resolve();
        })
    })
    return uus;
}

module.exports = {updateUserStats}