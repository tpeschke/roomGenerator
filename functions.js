let rooms = []
const EMPTY = 'Empty'
    , SPECIAL = 'Special'
    , PASSIVEACTIVE = 'Passive & Active'
    , PASSIVE = 'Passive'
    , ACTIVE = 'Active'
    , ERROR = 'Something went Wrong with the '
    , YES = 'Yes'
    , NO = 'No'

let getThreat = () => {
    let randomRoll = Math.floor(Math.random() * (20 - 1 + 1) + 1)

    if (randomRoll > 14) {
        return { threat: EMPTY, roll: randomRoll }
    } else if (randomRoll > 13) {
        return { threat: SPECIAL, roll: randomRoll }
    } else if (randomRoll > 10) {
        return { threat: PASSIVEACTIVE, roll: randomRoll }
    } else if (randomRoll > 5) {
        return { threat: PASSIVE, roll: randomRoll }
    } else if (randomRoll > 0) {
        return { threat: ACTIVE, roll: randomRoll }
    } else {
        return { threat: ERROR + 'Threat', roll: randomRoll }
    }
}

getTreasure = (threat) => {
    let randomRoll = Math.floor(Math.random() * (4 - 1 + 1) + 1)

    if (threat === EMPTY && randomRoll === 1) {
        return { treasure: YES, roll: randomRoll }
    } else if ((threat === SPECIAL || threat === PASSIVE) && randomRoll < 3) {
        return { treasure: YES, roll: randomRoll }
    } else if ((threat === PASSIVEACTIVE || threat === ACTIVE) && randomRoll < 4) {
        return { treasure: YES, roll: randomRoll }
    } else {
        return { treasure: NO, roll: randomRoll }
    }
}

let getRoomInfo = () => {
    let threat = getThreat()
    let treasure = getTreasure(threat.threat)

    return { threat, treasure }
}

let generateRoomsAndShowOnPage = () => {
    let roomNumber = 100
    for (let i = 0; i < roomNumber; i++) {
        let room = getRoomInfo()

        let roomDiv = document.createElement('div')
            , header = document.createElement('h1')
            , lowerDiv = document.createElement('div')

        roomDiv.classList.add("room-shell")
        lowerDiv.classList.add("lower-div")

        header.appendChild(document.createTextNode(`## Room #${i + 1}`))
        roomDiv.appendChild(header)

        let leftDiv = document.createElement('div')
            , rightDiv = document.createElement('div')
            , leftHeader = document.createElement('h2')
            , rightHeader = document.createElement('h2')
            , leftContent = document.createElement('p')
            , rightContent = document.createElement('p')

        leftDiv.classList.add("results")
        rightDiv.classList.add("results")

        leftHeader.append(document.createTextNode('Threat'))
        rightHeader.append(document.createTextNode('Treasure'))

        // console.log(room)
        leftContent.append(document.createTextNode(`${room.threat.threat} (Roll: ${room.threat.roll})`))
        rightContent.append(document.createTextNode(`${room.treasure.treasure} (Roll: ${room.treasure.roll})`))

        leftDiv.append(leftHeader)
        leftDiv.append(leftContent)

        rightDiv.append(rightHeader)
        rightDiv.append(rightContent)

        lowerDiv.append(leftDiv)
        lowerDiv.append(rightDiv)

        roomDiv.append(lowerDiv)

        document.getElementById('roomDiv').appendChild(roomDiv)
    }

    document.getElementById('titleDiv').appendChild(document.createTextNode(`${roomNumber} Rooms Created`))
}

generateRoomsAndShowOnPage()