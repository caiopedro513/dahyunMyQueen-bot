let getSlotStats = function(){
    let slotstats = new Promise (function(myResolve) {
        connection.query(`SELECT * FROM slotmachine`, function(error, results, fields){    
            myResolve(results[0].prize);
        })
    });
    return slotstats;
}

module.exports = {getSlotStats};