let showMobs = function(target, client, mssg){
    let cmdsplt = mssg.split(' ');
    let difficulty = cmdsplt[1];

    if (difficulty == "difficulty"){
        return client.say(target, `Easy : thug, thief, dealer | | Medium : Easy + cartel boss, army | | Hard : Medium + homeless , monkeSmoke`);
    }

    connection.query(`SELECT * FROM mobs ORDER BY strength`, function(error, results, fields){
        for (let i in results){
            client.say(target, `${results[i].name} | Money : ${results[i].money} | Damage : ${results[i].dmg} 
        | Health: ${results[i].health} | Strength : ${results[i].strength} | Multiplier : ${results[i].multiplier} | Probability : ${results[i].probability} | 5Head : ${results[i].smartness}`);
        }
    })
}

module.exports = {showMobs}