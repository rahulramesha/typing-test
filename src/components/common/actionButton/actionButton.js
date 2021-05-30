import classnames from 'classnames'

import './actionButton.scss'

export const ActionButton = props => {

    const actionButtonCLassName = classnames('actionButton', props.className)

    return <button onClick={props.onClick} className={actionButtonCLassName}>
        {props.children}
    </button>
}