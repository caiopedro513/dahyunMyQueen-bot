let emotes = ['COCK', 'dias', 'monkaX', 'PepeLoser', 'podium', 'rageW', 'rgpIRL', 'StupidFuckinMistakesMan', 'sanaZoom',
'SuperIdoldexiaorongdoumeinidetianbayuezhengwudeyangguangdoumeiniyaoyanreai105Cdenididiqingchundezhen',
'TwiceGood', 'xqcL', 'dahyunWoah', 'Pogplant', ':d'];

let rndemote = function(){
    let roll = Math.floor(Math.random() * emotes.length);
    return roll
}

let s = function(){
    let spin = new Promise(function(myResolve){
        finalresult = [];
        for (let i = 0; i < 3; i++){
            finalresult.push(' [ ' + emotes[rndemote()] + ' ] ');
        }
        myResolve(finalresult);
    })
    return spin;
}

module.exports = {s}