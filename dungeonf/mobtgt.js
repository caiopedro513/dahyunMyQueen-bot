let scoringd = require(`./dgscoring.js`).scoringd;
let getMobStats = require(`./getMobStats.js`).getMobStats;
let getUserStats = require(`../users/getUserStats.js`).getUserStats;

let mobtarget = function(mssg, username){

    let mobtargetd = new Promise (function(myResolve, myReject){
        let mobtgt;        
        let cmdsplt = mssg.split(' ');
        let difficulty = cmdsplt[1];

            switch(difficulty){
                case "easy":
                    connection.query(`SELECT * FROM mobs WHERE strength < 1500`, function(error, results, fields){
                        mobs = []
                        for (let i = 0; i < results.length; i++){
                            mobs.append(results);
                        }
                        return mobs
                    })

                case "medium":
                    connection.query(`SELECT * FROM mobs WHERE strength < 3000`, function(error, results, fields){
                        mobs = []
                        for (let i = 0; i < results.length; i++){
                            mobs.append(results);
                        }
                        return mobs
                    })

                case "hard":
                    connection.query(`SELECT * FROM mobs`, function(error, results, fields){
                        mobs = []
                        for (let i = 0; i < results.length; i++){
                            mobs.append(results);
                        }
                        return mobs
                    })

                default:
                    myReject('Usage: $dungeon [diffculty easy/medium/hard]')
            }
        
        })

    return mobtargetd
}

module.exports = {mobtarget}