let getUserStats = require(`./users/getUserStats`).getUserStats;

let calc = function(username, client, target){

    let sal = new Promise(function(myResolve){
        let salary
        getUserStats(username, username).then(function(userstats){
            
            if (userstats.energy >= 35){
                salary = 25 * (userstats.smartness / 100);
            }

            if (userstats.energy < 35){
                salary = 25 + ((userstats.smartness / 100) - (userstats.energy / 10));
            }

            if (salary > 350) salary = 350;

            if (salary < 25) salary = 25;

            if (salary <- 0){
                myReject(`KUKW`);
            }
            
            else{
                myResolve(salary);
            }

        }).catch(function(myReject){//if person is not in
            client.say(target, myReject);
        })

    })

    return sal;

}

module.exports = {calc};