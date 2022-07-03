let scoringd = require(`./dgscoring.js`).scoringd;

let mobtarget = function(mssg, username){

    let mobtargetd = new Promise (async function(myResolve, myReject){

        //splits message to get diff
        let cmdsplt = mssg.split(' ');
        let difficulty = cmdsplt[1];
        let maxstr;

        switch(difficulty){ //puts selected targets into mobs list
            
            case "easy":
                maxstr = 1500;
                break;

            case "medium":
                maxstr = 6500;
                break;

            case "hard":
                maxstr = 1000001
                break;

            default: //if person writes diff wrong or puts nothing
                return myReject('Usage: $dungeon [diffculty easy/medium/hard] $mobs or $mobs difficulty to see more');
                break;

        }

        let cuce = new Promise (function(myResolve, myReject){
            connection.query(`SELECT * FROM mobs WHERE strength <= ?`, [maxstr], function(error, results, fields){
                let mobs = results;
                myResolve(mobs);
            });
        });

        cuce.then(function(mobs){
            return myResolve(mobs)
        })
    })

    return mobtargetd
}

module.exports = {mobtarget}