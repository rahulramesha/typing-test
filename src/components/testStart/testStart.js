import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { ActionButton } from '../common/actionButton'

import './testStart.scss'

export const TestStart = () => {

    const [timeValue, setTimeValue] = useState(60)

    const history = useHistory()

    const handleChange =  e => {
        setTimeValue(e.target.value)
    }

    const handleClick = e => {
        history.push('/test', { time: timeValue })
    }

    return <div className={'testStart'}>
        <h2> Start Your Test!</h2>
        <div className={'timeDropDown'}>
            <label>Select Time</label>
            <select value={timeValue}
                onChange={handleChange}>
                <option value={60}>1 min</option>
                <option value={120}>2 min</option>
                <option value={180}>3 min</option>
                <option value={240}>4 min</option>
                <option value={300}>5 min</option>
            </select>
        </div>
        <ActionButton onClick={handleClick} className={'startTestButton'} >Start</ActionButton>
    </div>
}