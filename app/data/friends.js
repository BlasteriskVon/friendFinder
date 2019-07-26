function randomNumberArray() {
    var result = [];
    for(var i = 0;i < 10;i++){
        var randomNumber = Math.ceil(Math.random() * 5);
        result.push(randomNumber);
    }
    return result;
}


var friends = [
    {
        name: "Pacman",
        photo: "https://i.dlpng.com/static/png/1224149-png-pacman-png-260_300_preview.png",
        scores: randomNumberArray()
    },
    {
        name: "Sonic",
        photo: "https://regmedia.co.uk/2011/06/23/sonic_1.png",
        scores: randomNumberArray()
    },
    {
        name: "Jason",
        photo: "https://i.imgur.com/JEWpRQU.jpg",
        scores: randomNumberArray()
    }
];

module.exports = friends;