let updateUserStats = function(username, health, energy, money, strength, fat, smartness){
    let uus = new Promise(function(Resolve, Reject){
        connection.query(`UPDATE fightclubstats SET money = money + ?, health = health + ?, energy = energy + ?, strength = strength + ?, fat = fat + ?, smartness = smartness + ? WHERE username = ?`, [money, health, energy, strength, fat, smartness, username], function (error, results, fields) {
            Resolve();
        })
    })
    return uus;
}

module.exports = {updateUserStats}