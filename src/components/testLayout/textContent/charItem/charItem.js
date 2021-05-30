import classnames from 'classnames'

import './charItem.scss'

export const CharItem = ({ id, charData }) => {

    const { value, isSpace, isCorrect, isTyped, isOnTarget } = charData

    const charClassName = classnames( 'charItem',
        isCorrect ? 'correct': 'wrong',
        !isTyped && 'notTyped',
        isOnTarget && 'blink'
    )

    return isSpace 
        ? <span className={charClassName}>&nbsp;</span>
        : <span className={charClassName}>{value}</span>
}