let getUserStats = require("../users/getUserStats").getUserStats;
let getSlotStats = require(`./getSlotStats.js`).getSlotStats;
let s = require(`./spin.js`).s;
let updateSlotStats = require(`./updateSlotStats`).updateSlotStats;
let updateUserStats = require(`../users/updateUserStats`).updateUserStats;
let cmdsplt

let slot = function(target, client, message, username, isprize){

    if (isprize == true){
        return getSlotStats().then(function(prize){
            client.say(target, `${username} prize is $${prize}`);
        })
    }
    cmdsplt = message.split(' ');
    if (cmdsplt.length == 1) cmdsplt = [ '$slot', '10' ];
    cmdsplt = cmdsplt[1].trim();
    let bet = Number(cmdsplt);

    let slots = new Promise(function(myResolve, myReject){    
        getUserStats(username, username).then(function(userstats){//if user is in
            getSlotStats().then(function(prize){
                if (Number.isNaN(bet)){
                    return client.say(target, `BONK ${username} you can't bet that`);
                }

                if (userstats.money < bet){
                    return client.say(target, `VeryPog ${username} Tssk you can't bet more than you have`);
                }

                if (bet < 10){
                    return client.say(target, `UwU ${username} minimum bet is $10`);
                }
                
                s().then(function(finalresults){

                    updateUserStats(username, 0, 0, -bet, 0, 0);

                    client.say(target, `${finalresults}`)
                    
                    if (finalresults[0] == finalresults[1] && finalresults[0] == finalresults[2]){
                        updateUserStats(username, 0, 0, prize, 0, 0);
                        updateSlotStats(-prize);
                        return client.say(target, `peepoClap ${username} you just won $${prize}`);
                    }

                    for (let t = 0; t < finalresults.length; t++){
                        for (let p = t + 1; p < finalresults.length; p++){
                            if (finalresults[t] == finalresults[p]){
                                updateSlotStats(-bet*0.25);
                                updateUserStats(username, 0, 0, bet*0.25, 0, 0)
                                return client.say(target, `yeah ${username} not the best results but at least you got $${bet * 0.25}`);
                            }
                        }
                    }

                    updateSlotStats(bet);
                    return client.say(target, `FUCKYOU ${username} you didnt win anything try again and maybe you do`);
                })
            })

        }).catch(function(myReject) { //if user is not in
            client.say(target, myReject);
        })

    });
}

module.exports = {slot};