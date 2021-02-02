import React, { useContext} from 'react';
import UsersContext from '../context/UsersContext';
import RepoItem from './RepoItem';

const Repos = ({myStyle}) => {
    const {repos} = useContext(UsersContext)

    return (
        <div>
        {repos && repos.map(repo => {
            return <RepoItem key={repo.id} repo={repo} myStyle={myStyle}/>
        })}
        </div>
    )
}





export default Repos
