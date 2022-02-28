let help = function(target, client, message){

    if (message.indexOf("helpl") === -1){
        return client.say(target, `TLDR: $stats | $fight | money and health each 30min | $gym | $prices $store $hotel prices  can try for w no money police may get you | $job $work | too much fat = bad
        $study = bigger salary max 350 + 150 if special day`)    
    }
    

    client.say(target, `You start with 25💪 $250 ⚡100 10 fat and ❤100 you can $fight with other people to get money you also get 
    $5 every 30min as well as 5❤, you can workout by going to the $gym for $75 wich will make you lose weight and get stronger, 
    to get stronger you can also fight with someone stronger than you, doing that will give you +10💪 you can $heal for $100 to get more health, to rest you can $sleep
    and dont foret to check $hotel prices first(you can enter for free just dont get caught by police PepeLaugh ), and if you want to know the odds just type $odds, 
    $stats to check you stats, to heal a bit and also restore energy you can $buy stuff in the $store PRICES MAY VARY TO CHECK DO $prices, to earn money you can $work and your
    salary will be based on your smartness and energy so if ur too tired you will not get paid as much, base salary is $25 max is $350 + 150 if special day too much fat will 
    take health away from you of wich is proporcional to yout fat`);

}

module.exports = {help}