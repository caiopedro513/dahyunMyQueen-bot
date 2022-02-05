let updateUserStats = function(username, health, energy, money, strength, fat){
    let uus = new Promise(function(Resolve, Reject){
        connection.query(`UPDATE fightclubstats SET money = money + ?, health = health + ?, energy = energy + ?, strength = strength + ?, fat = fat + ? WHERE username = ?`, [money, health, energy, strength, fat, username], function (error, results, fields) {
            Resolve();
        })
    })
    return uus;
}

module.exports = {updateUserStats}