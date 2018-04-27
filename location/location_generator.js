var jsoncities = require('../cities.json');
var fs = require('fs');

console.log(jsoncities.features[0]);

var firstName = ['Dragon', 'Snake', 'Unstoppable', 'Bloody', 'Crow', 'Wolf', 'Raven', 'Heavy', 'Fast', 'Singing', 'Skylark', 'Vulture', 'Wyrm', 'Owl', 'Turtle', 'Wren', 'Bluebird', 'Magpie', 'Stealthy', 'Sharp', 'Lightning', 'Clean', 'Butcher', 'Blade-dancer', 'Graceful', 'Nightcrawler', 'Weasel', 'Wolverine', 'Slicer', 'Unpredictible', 'Wind', 'Echo', 'Fox', 'Bear', 'Tiger', 'Panther', 'Calm', 'Incredible', 'Triumphant', 'Wild', 'Dangerous', 'Featherlight', 'Clever', 'Sly', 'Ruthless'];
var lastName = ['Ryu', 'Yoshi', 'Daisuke', 'Akira', 'Tetsuo', 'Tatsuya', 'Yosuke', 'Katsumi', 'Kenzou', 'Bill', 'Kiyoshi', 'Koji', 'Mao', 'Nariko', 'Hikaru', 'Sora', 'Asuga', 'Ayeka', 'Haia', 'Hide', 'Kaida', 'Kasumi', 'Kazane', 'Kitiara', 'Mai', 'Moriko', 'Rin', 'Ryoko', 'Sayua', 'Shino', 'Shun', 'Sunako', 'Hibiki', 'Hiryur', 'Hisoki', 'Beatrix', 'Kage', 'Kazuya', 'Kenji', 'Noboru', 'Raiden', 'Rikuto', 'Ryoto', 'Shinobu', 'Souta', 'Shunsuke', 'Toshiro'];
var belt = ['White', 'Yellow', 'Red', 'Green', 'Blue', 'Rainbow', 'Sky blue', 'Black', 'Brown', 'Grey'];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function createNinjas() {
    return {
        name: firstName[getRandomInt(firstName.length)] + ' ' + lastName[getRandomInt(lastName.length)],
        rank: belt[getRandomInt(belt.length)] + ' belt',
        available: Math.random() >= 0.33,
        geometry: jsoncities.features[getRandomInt(jsoncities.features.length)].geometry
    };
}

function createLotOfNinjasInTheDatabase(numberOfNinjas) {
    collectionOfNinjas = [];
    for(let i = 0; i <= numberOfNinjas; i++) {
        collectionOfNinjas.push(createNinjas());
    }
    return collectionOfNinjas;
}

let collectionOfNinjasToBeSavedOntoTheDatabase = createLotOfNinjasInTheDatabase(1500);
console.log(collectionOfNinjasToBeSavedOntoTheDatabase[0]);

collectionOfNinjasToBeSavedOntoTheDatabase = JSON.stringify(collectionOfNinjasToBeSavedOntoTheDatabase);

fs.writeFile("ninjas.json", collectionOfNinjasToBeSavedOntoTheDatabase, function(err) {
    if (err) {
        console.log(err);
    }
});