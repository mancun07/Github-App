import {useReducer} from 'react'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'

const AlertState = (props) => {
    const initialState = {
        alert: null
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlert = (message) => {
        dispatch({type: 'SET_ALERT', payload: message});
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: 'CLEAR_ALERT'});
        }, 3000) 
    }

    return (
        <AlertContext.Provider value={{
            alert: state.alert,
            setAlert: setAlert,
            clearAlert: clearAlert
        }}>
          {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState