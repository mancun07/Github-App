import React from 'react'
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

const UserItem = ({user}) => {
    return (
        <div className="user-item">
            <img src={user.avatar_url} alt=""/>
            <p>{user.login}</p>
            <Link to={`users/${user.login}`} className="btn bg-dark">Узнать подробнее</Link>
        </div>
    )
}

UserItem.propTypes = {
    user: propTypes.object.isRequired
}

export default UserItem
