import { useEffect, useState, useCallback, useRef } from "react"
import { useLocation, useHistory } from 'react-router-dom'

import { TextContent }from './textContent'
import { Timer } from './timer'
import { ActionButton } from '../common/actionButton' 

import './testLayout.scss'
import { fetchTextData, handleCharPress, handleBackspace, handleSpacePress, getResult } from '../util'

export const TestLayout = () => {

    const [charListData, setCharListData] = useState({
        currentId: 0,
        list: [],
        words: []
    })
    const isTimerStarted = useRef()

    const history = useHistory()
    const location = useLocation()

    const time = location.state && location.state.time ? location.state.time: 60
    const [timer, setTimer] = useState(time)

    useEffect(() => {
        fetchTextData('/medium-text.json', setCharListData)

        isTimerStarted.current = false
        window.addEventListener('keypress', handleKeyPress)
        window.addEventListener('keydown', handleBackPress)

        return () => {
            window.removeEventListener('keypress', handleKeyPress)
            window.removeEventListener('keydown', handleBackPress)
        }

    }, [])


    const handleKeyPress = useCallback(e => {
        const { key } = e

        if(!isTimerStarted.current) {
            isTimerStarted.current = true
            startTimer()
        }

        if(/[a-zA-Z0-9?.,!-_()']/.test(key)) {
            setCharListData(prevState => {
                return handleCharPress(prevState, key)
            })
        } else if(key === ' ') {
            setCharListData(handleSpacePress)
        }
    }, [])

    const handleBackPress = useCallback(e => {
        const { keyCode } = e

        if(keyCode === 8) {
            setCharListData(handleBackspace)
        }
    }, [])

    const showResult = () => {
        setCharListData(prevState => {
            const result =  getResult(prevState)

            history.push('./result', { result: result })
            return prevState
        })
        
    }

    const startTimer = () => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                prevTimer--

                if(prevTimer === 0) {
                    showResult()
                    clearInterval(interval)
                }

                return prevTimer
            })
        }, 1000)
    }


    return <div className={'testLayout'}>
        <div className={'testContent'}>
            <div className={'testControls'}>
                <Timer timer={timer} />
                <ActionButton className={'closeButton'} onClick={showResult}>close</ActionButton>
            </div>
            <TextContent charListData={charListData}/>
        </div>
    </div>  

}