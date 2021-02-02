import React from 'react'
import AlertContext from '../context/AlertContext'
import {useContext} from 'react'
import Alert from './Alert'
import Search from './Search'
import Users from './Users'


const Home = () => {
    const {alert} = useContext(AlertContext)
    return (
        <div>
        {alert && <Alert/>}
        <Search/>
        <Users/>
            
        </div>
    )
}

export default Home
