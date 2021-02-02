import React, {useEffect, useContext} from 'react';
import UsersContext from '../context/UsersContext';
import {Link} from 'react-router-dom';
import Repos from './Repos';

const UserDetails = ({match}) => {
    const {getUser, getRepos, user} = useContext(UsersContext);
    const login = match.params.id;
    console.log(login)

    // getRepos(login)

    useEffect(() => {
        getUser(login);
        getRepos(login);
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            <Link to={'/Github-App'} className="btn bg-dark">Назад к результатам поиска</Link>{' '}
            <span>Готовность к проектам:{' '} {user.hireable ? <i className="fas fa-check" style={{color: 'green'}}></i> : <i className="fas fa-times" style={{color: 'red'}}></i>}</span>
            { user && (
                <div>
                    <div className="user-details my-1">
                        <div className="user-details__about text-center p-1">
                            <img src={user.avatar_url} alt=""/>
                            <h2>{user.name}</h2>
                            <p>Место проживания: {user.location}</p>
                        </div>
                        <div className="user-details__bio">
                            <h3>BIO</h3>
                            <p> {user.bio ? user.bio : 'Информация не предоставлена'} </p>     
                            <a href={user.html_url} className="btn bg-dark">Посетить Github Профиль</a>
                            <div className="user-details__bio__footer">
                                <p>Username: {user.login}</p>
                                <p>Компания: {user.company} </p>
                                <p>Веб-ресурс: {user.blog}</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-aside-info p-1 my-1">
                                <button className="btn bg-red">Followers: {user.followers}</button>
                                <button className="btn bg-green">Following: {user.following} </button>
                                <button className="btn bg-light">Public Repos: {user.public_repos} </button>
                                <button className="btn bg-dark">Public Gists: {user.public_gists}</button>
                            </div>
                </div>
 
                           
            )}

            <div className="user-repos my-4">
                <h2 className="text-center">Ряд репозиториев представлены ниже:</h2>
                <Repos myStyle={myStyle}/>
            </div>
        </div>
    )
}

const myStyle = {
    background: 'steelblue',
    color: 'white'
}

export default UserDetails
