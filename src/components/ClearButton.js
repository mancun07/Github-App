import React, {useContext} from 'react'
import UsersContext from '../context/UsersContext'

const ClearButton = () => {
    const {clearUsers} = useContext(UsersContext)


    return (
        <div className="p-1">
            <button onClick={clearUsers} className="btn btn-block bg-light ">Очистить</button>
        </div>
    )
}

export default ClearButton
