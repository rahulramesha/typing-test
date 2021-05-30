import { Link, useLocation } from 'react-router-dom'

import './testResult.scss'

export const TestResult = () => {

    const location = useLocation()
    const result = location.state && location.state.result ? location.state.result : 0

    return <div className={'testResult'}>
        <h2>Congratulations!, you scored {result}</h2>
        <Link className={'actionLink'} to='/home'>Test Again</Link>
    </div>
    
}