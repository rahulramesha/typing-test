export function handleCharPress(charListData, key) {
    let {currentId, list, words} = charListData

    changeTypedData(list[currentId], key)

    currentId++

    setNewTarget(list[currentId])

    return {
        currentId,
        list,
        words
    }
}

export function handleSpacePress(charListData) {

    let { currentId, list } = charListData

    if(list[currentId].value === ' ') {
        return handleCharPress(charListData, ' ')
    }

    return charListData
}

export function handleBackspace(charListData) {

    let { currentId, list, words } = charListData

    list[currentId].isOnTarget = false

    currentId--

    resetTypedData(list[currentId])

    return {
        currentId,
        list,
        words
    }
}

function resetTypedData(charData) {
    charData.isOnTarget = true
    charData.isTyped = false
    charData.isCorrect = true
}

function changeTypedData(charData, key) {
    charData.isOnTarget = false
    charData.isTyped = true
    charData.isCorrect = key === charData.value
}

function setNewTarget(charData) {
    charData.isOnTarget = true
}