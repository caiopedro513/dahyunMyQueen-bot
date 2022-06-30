let getMobStats = function(mob){
    let mobStats = new Promise (function(myResolve, myReject){
        connection.query(`SELECT * FROM mobs WHERE name = ?`, [mob], function(error, results, fields){
            if (results != undefined){
                if (results.length == 0){
                    myReject(`${mob} doesn't exits LULE`);
                }
                else {
                    myResolve(results[0]);
                }
            }
        });
    });
    return mobStats;
};

module.exports = {getMobStats}