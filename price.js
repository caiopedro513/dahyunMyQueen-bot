let pricing = function(username){
    var price = 0;
    let prices = new Promise(function(myResolve) {
        connection.query(`SELECT money FROM fightclubstats WHERE username = ?`, [username], function(error, results, fields){
            let money = results[0].money;
            if (money >= 150000){
                price = money * 0.05;
            }
            if (money >= 15000 && money <= 150000){
                price = money * 0.15
            }
            if (money >= 1500 && money <= 15000){
                price = money * 0.25;
            }
            if (money >= 150 && money <= 1500){
                price = money * 0.35;
            }
            if (money < 150){
                price = 1;
            }
            if (price > 0) {
                myResolve(price); // when successful
            }
        })
    });
    return prices
}

module.exports = {pricing};