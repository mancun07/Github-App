import React from 'react'
import Preloader  from '../img/spinner.gif'

const Spinner = () => {
    return (
        <div className="text-center">
            <img src={Preloader} alt="" style={{width: '150px'}}/>
        </div>
    )
}

export default Spinner
