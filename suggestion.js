let fs = require('fs');
let suggestion = function(target, client, message){
    mssgsplt = message.split('$suggestion ');
    fs.appendFile('todolist.txt', mssgsplt[1] + '\n', (err) => {
        client.say(target, `NOTED added to to do list`);
        if (err) throw err;
    })
}

module.exports = {suggestion}