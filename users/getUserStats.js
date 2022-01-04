let getUserStats = function(target){
    let usrstats = new Promise (function(myResolve, myReject) {
        if (!target){
            connection.query(`SELECT * FROM fightclubstats ORDER BY RAND() LIMIT 1;`, function(error, results, fields){
                myResolve(resulst[0]); // everything from the random person
            })
        }
        else{
            connection.query(`SELECT * FROM fightclubstats WHERE username = ?`, [target], function(error, results, fields){
                if (results[0] == undefined){
                    myReject("The person is not in");
                }
                else {
                    myResolve(results[0]);
                }
            })       
        }
    });
    return usrstats;
}

module.exports = {getUserStats}