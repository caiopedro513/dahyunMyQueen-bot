let updateUserStats = function(username, health, energy, money, strength){
    let uus = new Promise(function(Resolve, Reject){
        connection.query(`UPDATE fightclubstats SET money = money + ?, health = health + ?, energy = energy + ?, strength = strength + ? WHERE username = ?`, [money, health, energy, strength, username], function (error, results, fields) {
            Resolve();
        })
    })
    return uus;
}

module.exports = {updateUserStats}