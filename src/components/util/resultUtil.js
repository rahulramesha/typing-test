export function getResult(charListData){
    const { words } = charListData
    const typedWords = getWordsFromCharList(charListData)
    let score = 0

    for(let i = 0; i < typedWords.length; i++) {
        if(typedWords[i] === words[i]) {
            score += 10
        } else {
            score -= 5
        }
    }

    return score
}

function getWordsFromCharList(charListData) {
    const charList = charListData.list.filter(charData => charData.isTyped)
    const targetChar = charListData.list.filter(charData => charData.isOnTarget)
    const words = []
    
    if(!charList.length) return words

    let word = ""
    for(const charData of charList) {
        if(charData.isSpace) {
            words.push(word)
            word = ""
        } else if(charData.isCorrect) {
            word = word.concat(charData.value)
        } else {
            word = word.concat('#')
        }
    }

    if(targetChar.length === 1 && targetChar[0].isSpace)
        words.push(word)

    return words
}