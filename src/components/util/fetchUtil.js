export async function fetchTextData (url, setCharListData) {
    const rawTextResponse = await fetch(url)
    const textData = await rawTextResponse.json()
    const { charList, words } = getCharListAndWords(textData.content)
    charList[0].isOnTarget = true

    setCharListData({
        currentId: 0,
        list: charList,
        words: words
    })
}

function getCharListAndWords(textList) {
    if(textList.length < 0) return []

    const shuffledList = shuffleList(textList)

    const words = getWords(shuffledList)
    const charList = getCharList(words)

    return { charList, words }
}

function shuffleList(textList) {
    let currentIndex = textList.length, 
        temp, 
        randomIndex


    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temp = textList[currentIndex];
        textList[currentIndex] = textList[randomIndex];
        textList[randomIndex] = temp;
    }

    return textList;
}

function getWords(textList) {
    let words = []

    for(const text of textList) {
        words = words.concat(text.split(' '))
    }

    return words
}

function getCharList(words) {
    let charList = []

    const spaceObject = {
        value: ' ',
        isSpace: true,
        isCorrect: true,
        isTyped: false,
        isOnTarget: false
    }

    for(const word of words) {

        const charObjectList = word.split('').map(char => {
            return {
                value: char,
                isSpace: false,
                isCorrect: true,
                isTyped: false,
                isOnTarget: false
            }
        })

        charList = charList.concat(charObjectList)
        charList.push({ ...spaceObject })
    }

    return charList
}