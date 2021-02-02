import React, {useContext} from 'react'
import AlertContext from '../context/AlertContext'

const Alert = () => {
    const {alert} = useContext(AlertContext)

    return (
        <div className="alert">
            <p><i className="fas fa-exclamation-circle"></i>{' '}{alert}</p>
        </div>
    )
}

export default Alert
