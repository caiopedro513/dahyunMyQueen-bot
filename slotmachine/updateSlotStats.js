let updateSlotStats = function(money){
    let ust = new Promise(function(Resolve, Reject){
        connection.query(`UPDATE slotmachine SET prize = prize + ?`, [money], function (error, results, fields) {
            Resolve();
        })
    })
    return ust;
}

module.exports = {updateSlotStats}