import { CharItem } from './charItem'

import './textContent.scss'

export const TextContent = ({ charListData }) => {

    const {currentId, list} = charListData

    return <div className={'textContent'}
                style={{transform: `translateX(calc(50% - ${currentId*35}rem))`}}>
        {list.map((charData, index) => {
            return <CharItem key={index} charData={charData}/>
        })}
    </div>
}