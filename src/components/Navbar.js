import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <i className="fab fa-github fa-2x"></i>{' '} 
                <span>Github Поисковик</span>
            </div>
            <ul className="menu">
                <li><Link to={'/Github-App'}>Главная</Link></li>
                <li><Link to={'/about'}>О приложении</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
