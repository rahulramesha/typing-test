import './timer.scss'

export const Timer = ({ timer }) => {  

    return <div className={'timer'}>
        <p>{timer}s</p>
    </div> 
    
}