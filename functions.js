let rooms = []
let EMPTY = 'Empty'
    , SPECIAL = 'Special'
    , PASSIVEACTIVE = 'Passive & Active'
    , ACTIVE = 'Active'
    , ERROR = 'Something went Wrong with the '
    , YES = 'YES'
    , NO = 'NO'

function generateRoomsAndShowOnPage () {
    for (let i = 0; i < 20; i++) {
        rooms.push(getRoomInfo())
    }
}

function getRoomInfo() {
    let threat = getThreat()
    let treasure = getTreasure(threat.threat)

    return {threat, treasure}
}

function getThreat() {
    let randomRoll = Math.random(20) + 1

    if (randomRoll > 14) {
        return {threat: EMPTY, roll: randomRoll}
    } else if (randomRoll > 13) {
        return {threat: SPECIAL, roll: randomRoll}
    } else if (randomRoll > 10) {
        return {threat: PASSIVEACTIVE, roll: randomRoll}
    } else if (randomRoll > 5) {
        return {threat: PASSIVE, roll: randomRoll}
    } else if (randomRoll > 0) {
        return {threat: ACTIVE, roll: randomRoll}
    } else {
        return {threat: ERROR + 'Threat', roll: randomRoll}
    }
}

function getTreasure(threat) {
    let randomRoll = Math.random(4) + 1

    if (threat === EMPTY && randomRoll === 1) {
        return {treasure: YES, roll: randomRoll}
    } else if ((threat === SPECIAL || threat === PASSIVE) && randomRoll < 3) {
        return {treasure: YES, roll: randomRoll}
    } else if ((threat === PASSIVEACTIVE || threat === ACTIVE) && randomRoll < 4) {
        return {treasure: YES, roll: randomRoll}
    } else {
        return {treasure: NO, roll: randomRoll}
    }
}