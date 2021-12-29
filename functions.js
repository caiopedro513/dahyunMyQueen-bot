//test
let test = function (target, client){
    client.say(target, `/me twiceLove TESTED twiceLove`);
}

//queen
let queen = function (target, client){
    client.say(target, `dahyunMyQueen`);
}

//smile
let smile = function(target, client){
    client.say(target, `DahyunSmile`);
}

//flashbang
let flashbang = function(target, commandName, client){
    var cmdsplt = commandName.split('$flashbang');
    var times = cmdsplt[1];
    if(!times) times = 10;
    if (times <= 100){
        client.say(target, `/me DinkDonk flashbang alert DinkDonk`)
        while (times > 0) {
            client.say(target, `dahyunMyQueen `.repeat(30));
            times--;
        }
    } 
}

//cock
let cock = function (target, client){
    client.say(target, `YEP COCK`);
}

//manik's weirdemote
let maniksweirdemote = function (target, client){
    client.say(target, `YEP COCK`);
}
//junior safadao
let safadao = function(target, client){
    client.say(target, `⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⣿⣿⣿⣿⠄⠄⠄⠙⠛⠆⠄⠄⢀⣾⣷⠻⣼⣿ ⣿⣿⠿⠛⠋⠁⠄⠄⠄⠄⠄⠈⠙⠫⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⢸⣿⣿⣆⢸⣿ ⣿⣯⠄⢀⣀⣠⣤⣤⣄⠄⠄⢠⣶⣿⡷⠾⠗⠄⠄⠄⠄⠄⠰⣾⣿⣿⣿⡼⣿ ⣿⣷⣾⠟⠋⠁⠈⠉⠉⠄⢠⣿⣿⣿⣷⣤⠄⠄⠄⠄⢀⣀⠄⢈⣿⣿⣿⣷⣻ ⣿⢛⣥⣶⡶⠖⢢⣤⣤⣶⣿⣿⣿⣿⣿⣿⠷⢶⠆⠄⠄⠄⠄⠈⠿⣿⣿⣿⣷
    ⣿⢿⣿⣿⣿⣿⣿⣿⣿⠋⠘⣿⡿⠋⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⢹⣿⣿⣿ ⣯⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⢉⣀⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠻⣦⣿⣿⡨ ⣿⣿⣿⣿⣿⣿⡿⡿⠃⠄⠄⣼⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢻⣿⣇ ⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄
    ⢸⣿⠟⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿ ⣿⣿⣿⣿⣿⣿⣷⡄⠄⠄⠈⠁⠄⣀⣤⣤⣶⣶⣿⣿⣶⡄⠄⠄⠄⠄⠄⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠿⠛⠉⠉⠉⠉⠄⠈⠉⠄⠄⠄⠄⠄⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⢀⣦⣤⣀⣀⣀⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⢸⣿⣿⣿⣿⣿⣿⠆⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠘⢫ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣾⣿⣿⣿⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ `);
}
//safadeza
let safadeza = function(target, client){
    client.say(target, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣤⣤⣤⣤⡀⠄⠄⠄⠄⠈⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡄⠄⠄⠄⠄⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢹⣦⣀⣴⣿⣿⡇⠄⣶⣶⢠⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡿⢿⣿⣿⣧⣴⣿⡏⣾⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢤⣿⣭⣿⡹⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠼⠿⠿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢄⢀⣠⣿⣿⣿⣿⣿⡏⠛⠿⢿⣿ ⣿⣿⣿⣿⣿⣿⣿⠿⠿⠟⠛⠛⠛⠉⠁⠄⣼⣿⣿⡿⠛⠛⠛⠛⠃⠄⠄⠠⠈ ⠉⠙⠋⠉
    ⠁⣤⣶⣶⣶⣾⠟⣠⡖⠉⣠⡾⢛⣯⠉⠉⠉⢀⣀⡀⢀⡀⢘⣿⣷ ⠄⠄⠄⠄⠈⠻⣿⣿⣿⣯⣼⣿⣧⣴⣿⣧⣿⣿⣷⣶⣷⣿⣿⣿⣿⣿⣿⣿⣿ ⠉⠓⠄⠄⠄⠄⠈⠉⠉⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡝⠛⠿⣿⣿⣿⣿ ⣀⠄⠄⠄⠄⠄⠄⠄⠄⠘⠿⣿⣿⣿⣿
    ⡿⠿⠿⠿⠟⠉⠄⠄⠶⣾⣿⣿⣿⣿ ⣿⣦⣄⣀⠄⠄⠄⠄⠄⠄⠄⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠐⠛⠉⠙⠻⢿ 
    ⣿⣿⣿⣿⣶⣶⣶⣶⣦⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ `);
}

//etshake1
let etshake1 = function(target, client){
    client.say(target, `et1231Shake`);
}

//etshake3
let etshake3 = function(target, client){
    client.say(target, `et1231Shake `.repeat(3));
}

//dahyunsmile
let dahyunsmile = function(target, client){
    client.say(target, `FeelsWowMan DahyunSmile`);
}

//dahyunmyqueen
let dahyunmyqueen = function(target, client){
    client.say(target, `FeelsWowMan dahyunMyQueen`);
}

//boxing
let boxthislap = function(target, client){
    var boxtimes = 25
    while (boxtimes > 0){
        client.say(target, `DinkDonk rgp box`);
        boxtimes --;
    }
}

//faster
let faster = function(target, client){
    client.say(target, `YAAY faster rgp YAAY`);
}

//track limits
let limits = function(target, client){
    client.say(target, `forsenCD there's no such thing`);
}

//stay out
let stayout = function(target, client){
    client.say(target, `DinkDonk stay out rgp DinkDonk`);
}

//raining
let raining = function(target, client){
    client.say(target, `DinkDonk don't be like norris rgp`);
}

//LULE
let LULE = function(target, client){
    client.say(target, `EL CLASSICO LULE`)
}

//rats
let rats = function(target, client){
    client.say(target, `DansGame`)
}

//dice
let diceroll = function(){
    var roll = Math.floor(Math.random() * 101);
    return roll;
}

module.exports = {test, queen, smile, flashbang, cock, maniksweirdemote, safadao, safadeza, etshake1, etshake3, dahyunsmile, dahyunmyqueen, boxthislap, faster, limits, stayout, raining, LULE, rats, diceroll};