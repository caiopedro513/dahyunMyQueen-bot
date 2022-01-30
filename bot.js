require('dotenv').config()

const tmi = require('tmi.js');
const fs = require('fs');
const { username } = require('tmi.js/lib/utils');
let test = require('./functions.js').test;
let queen = require('./functions.js').queen;
let smile = require('./functions.js').smile;
let flashbang = require('./functions.js').flashbang;
let cock = require('./functions.js').cock;
let maniksweirdemote = require('./functions.js').maniksweirdemote;
let safadao = require('./functions.js').safadao;
let safadeza = require('./functions.js').safadeza;
let etshake1 = require('./functions.js').etshake1;
let etshake3 = require('./functions.js').etshake3;
let dahyunsmile = require('./functions.js').dahyunsmile;
let dahyunmyqueen = require('./functions.js').dahyunmyqueen;
let boxthislap = require('./functions.js').boxthislap;
let faster = require('./functions.js').faster;
let limits = require('./functions.js').limits;
let stayout = require('./functions.js').stayout;
let raining = require('./functions.js').raining;
let LULE = require(`./functions.js`).LULE;
let rats = require(`./functions.js`).rats;
let diceroll = require(`./functions.js`).diceroll;
let heal = require(`./heal.js`).heal;
let revive = require(`./revive.js`).revive;
let namecheck = require(`./namecheck.js`).namecheck;
let join = require(`./join.js`).join;
let money = require(`./money.js`).money;
let health = require(`./health.js`).health;
let fight = require(`./fight.js`).fight;
let leaderboard = require(`./leaderboard.js`).leaderboard;
let odds = require(`./odds.js`).odds;
let gym = require(`./gym.js`).gym;
let strength = require(`./strength.js`).strength;
let help = require(`./help.js`).help;
let energy = require(`./energy.js`).energy;
let store = require(`./store.js`).store;
let suggestion = require(`./suggestion.js`).suggestion;
let update = require(`./update.js`).update;
let job = require(`./job.js`).job;
let stats = require(`./stats.js`).stats;
let showprice = require(`./showprice.js`).showprice;
let slot = require(`./slotmachine/slots.js`).slot;
let sleep = require(`./sleep.js`).sleep;

var mysql = require('mysql');
const { dice } = require('./functions.js');
globalThis.connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
});

connection.connect();

// Define configuration options
const opts = {
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels: [
        process.env.CHANNEL_NAME
    ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

var today = new Date();
var cdl = new Date(today);

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot
    
    // Remove whitespace from chat message + lower everything
    const commandName = msg.trim().toLowerCase();

    //queen
    if (commandName.indexOf('$queen') > -1){
        queen(target, client);
    }
    // flashbang
    if (commandName.startsWith(`$flashbang`)) { 
        flashbang(target, commandName, client);
    }
    // smile
    if (commandName.indexOf(`smile`) > -1 && commandName.indexOf(`dahyunsmile`) === -1){
        smile(target, client);
    }
    //COCK
    if (commandName.indexOf('cock') > -1) {
        cock(target, client);
    }
    //manik's weird emote
    if (commandName.indexOf(`bigcoccoc`) > -1){
            maniksweirdemote(target, client);
    }
    //test
    if (commandName.indexOf(`test`) > -1){
        if (commandName.indexOf(`tested`) === -1){
           test(target, client);
        }
    }
    //Junior
    if (commandName.indexOf(`$junior safadão`) > -1){
        safadao(target, client);
    }
    if (commandName.indexOf(`$junior safadeza`) > -1){
        safadeza(target, client);
    }
    //et1
    if (commandName.indexOf('et1231shake') > -1 && commandName.indexOf(`et1231shake et1231shake et1231shake`) === -1){
        etshake1(target, client);
    }
    //et3
    if (commandName.indexOf(`et1231shake et1231shake et1231shake`) > -1){
        etshake3(target, client);
    }
    //smile
    if (commandName.indexOf(`dahyunsmile`) > -1){
        dahyunsmile(target, client);
    }
    //queen
    if (commandName.indexOf(`dahyunmyqueen`) > -1){
        dahyunmyqueen(target, client);
    }
    //box
    if (commandName.indexOf(`box now`) > -1){
        boxthislap(target, client);
    }
    //faster
    if (commandName.indexOf(`go faster`) > -1){
        faster(target, client);
    }
    //limits
    if (commandName.indexOf(`track limits`) > -1){
        limits(target, client);
    }
    //stay out
    if (commandName.indexOf(`stay out`) > -1){
        stayout(target, client);
    }
    //rain
    if (commandName.indexOf(`it's raining`) > -1){
        raining(target, client);
    }
    //LULE
    if (commandName.indexOf(`classic`) > -1){
        LULE(target, client);
    }
    //DansGame
    if (commandName.indexOf(`chubbehmouse`) === -1 && commandName.indexOf(`darksc23hyperats`) === -1){
        if (commandName.indexOf(`rat`) > -1 || commandName.indexOf(`mice`) > -1 || commandName.indexOf(`mouse`) > -1 || 
        commandName.indexOf(`rodent`) > -1 || commandName.indexOf(`🐁`) > -1 || commandName.indexOf(`🐀`) > -1 ||
        commandName.indexOf(`🐭`) > -1 || commandName.indexOf(`🖱`) > -1 || commandName.indexOf(`gerinosco`) > -1 || commandName.indexOf(`scokaychamp`) > -1 || commandName.indexOf('hehr') > -1){
            rats(target, client);
        }
    }
    //namecheck
    if (commandName.indexOf(`namecheck`) > -1){
        namecheck(target, client, context.username);
    }
    //join
    if (commandName.startsWith("$join")){
        join(target, client, context.username);
    }
    //money
    if (commandName.startsWith("$money")){
        money(target, client, context.username, commandName);
    }
    //health
    if (commandName.startsWith("$health")){
        health(target, client, context.username, commandName);
    }
    //leaderboard
    if (commandName.startsWith("$leaderboard")){
        leaderboard(target, client, cdl, commandName);
    }
    //dice
    if (commandName === "$dice"){
        client.say(target, `You got ${diceroll()}`);
    }
    //fight
    if (commandName.startsWith("$fight")){
        fight(target, client, context.username, commandName);
    }
    //heal
    if (commandName.startsWith(`$heal`) && commandName.indexOf(`$health`) === -1){
        heal(target, client, context.username);
    }
    //revive
    if (commandName.startsWith('$revive')){
        revive(target, client, context.username);
    }
    //odds
    if (commandName.startsWith("$odds")){
        odds(target, client);
    }
    //gym
    if (commandName.startsWith("$gym")){
        gym(target, client, context.username);
    }
    //strength
    if (commandName.startsWith("$strength")){
        strength(target, client, context.username, commandName);
    }
    //help
    if (commandName.startsWith("$help")){
        help(target, client);
    }
    //energy
    if (commandName.startsWith("$energy")){
        energy(target, client, context.username, commandName);
    }
    //buy
    if (commandName.startsWith("$buy")){
        store(target, client, context.username, commandName, 0);
    }
    //store
    if (commandName.startsWith("$store")){
        store(target, client, context.username, commandName, 1);
    }
    //suggestion
    if (commandName.startsWith("$suggestion")){
        suggestion(target, client, commandName);
    }
    //update
    if (commandName.startsWith("$update") || commandName.startsWith("$patchnotes")){
        update(target, client);
    }
    //job
    if (commandName.startsWith("$job") || commandName.startsWith("$work")){
        job(target, client, context.username, diceroll());
    }
    //stats
    if (commandName.startsWith("$stats")){
        stats(target, client, context.username, commandName);
    }
    //prices
    if (commandName.startsWith("$prices")){
        showprice(target, client, context.username);
    }
    //prize
    if (commandName.startsWith("$prize")){
        slot(target, client, commandName, context.username, true);
    }
    //slot
    if (commandName.startsWith("$slot")){
        slot(target, client, commandName, context.username, false);
    }
    //hotels
    if (commandName.startsWith("$hotel prices")){
        sleep(context.username, 'price', client, target, commandName);
    }
    //sleep
    if (commandName.startsWith("$sleep")){
        sleep(context.username, 'sleep', client, target, commandName);
    }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}\n :)`);
}
