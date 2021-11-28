function gameObject() {
    return {
        home: { 
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrian": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }

    }
}

const game = gameObject();

function findPlayer(name) {
    let player;
    if (game.home.players[name]) {
        return player = game.home.players[name];
    } else if (game.away.players[name]) {
        return player = game.away.players[name];
    }
}

function numPointsScored(playerName) {
    return findPlayer(playerName).points;
}

function shoeSize(playerName) {
    return findPlayer(playerName).shoe;
}

function teamColors(teamName) {
    for (const key in game) {
        if (game[key].teamName === teamName) {
            return game[key].colors;
        } else {
            return console.log(`${teamName} is not playing today!`)
        }
    }
}

function playerNumbers(teamName) {
    let playerNumbers = [];
    for (const key in game) {
        if (game[key].teamName === teamName) {
            let players = game[key].players
            for (const key in players) {
                playerNumbers.push(players[key].number)
            }
        }
    }
    return playerNumbers;
}

function playerStats(playerName) {
    return findPlayer(playerName);
}

function bigShoeRebounds() {
    let bigShoeSize = 0;
    let bigShoeRebounds = 0; 
    for (team in game) {
        for (player in game[team].players) {
            if (game[team].players[player].shoe > bigShoeSize) {
                bigShoeSize = game[team].players[player].shoe;
                bigShoeRebounds = game[team].players[player].rebounds;
            } 
        }
    }
    return bigShoeRebounds;
}