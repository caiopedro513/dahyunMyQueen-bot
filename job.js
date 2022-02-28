const { getUserStats } = require("./users/getUserStats");
const { updateUserStats } = require("./users/updateUserStats");
const calc = require("./salary.js").calc;

let job = function(target, client, username, numrol){
    getUserStats(username, username).then(function(userstats){
        if (userstats.length === 0){
            client.say(target, `${username} is not even here KUKW but feel free to $join`);
        }
        else{
            if (userstats.health <= 0){
                return client.say(target, `Susge ${username} dead people can't work (i think) try $revive`);
            }            
            if (userstats.energy <= 0){
                return client.say(target, `BertinhoOverheat ${username} you're too tired to work`)
            }
            calc(username, client, target).then(function(pay){
                if (numrol >= 5 && numrol < 95){
                    updateUserStats(username, 0, -30, pay, 0, 0, 0).then(function(){
                        return client.say(target, `yeeeeeeeeeeeeeeeeeeees ${username} you had a nice day at work [+$${pay}] [-30⚡]`);
                    })
                }
                if (numrol >= 95){
                    updateUserStats(username, 0, -15, pay + 150, 0, 0, 0).then(function(){
                        return client.say(target, `SuperIdoldexiaorongdoumeinidetianbayuezhengwudeyangguangdoumeiniyaoyanreai105Cdenididiqingchundezhen 
                        ${username} this is your lucky day your boss was so happy he gave everyone extra money [+$${pay + 150}] [-15⚡]`);
                    })
                }
                if (numrol < 5){
                    updateUserStats(username, 0, -35, -pay, 0, 0, 0).then(function(){
                        return client.say(target, `rageW ${username} it was a nice day in work but you got robbed on your way home [-$${pay}] [-35⚡]`);
                    })
                }
            })
        }
    }).catch(function(myReject){
        client.say(target, myReject);
    })
}

module.exports = {job}