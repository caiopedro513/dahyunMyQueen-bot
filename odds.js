let odds = function(target, client){
    client.say(target, `Strength + 1/2 of your energy + 1/4 smartness - 1/4 fat of both you and your target will be subtracted and divided by 100 and based on that score you may win or lose
    in case you both have same strength and energy it's 50% chance you win and 50% that you lose, and even if you're weaker you can still win if a 100 sides dice
    rolls the difference of 100 - score or more NOTED`);
}

module.exports = {odds};