let odds = function(target, client){
    client.say(target, `If the dice rolls 97 or bigger you win big time no hit +$100 other way around if dice rolls 3 or less, otherwise
    strength and energy of both you and your target will be subtracted and divided by 100 and based on that score you may win or lose
    in case you both have same strength and energy it's 50% chance you win and 50% that you lose NOTED`);
}

module.exports = {odds};