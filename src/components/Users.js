import React, {useContext} from 'react'
import UsersContext from '../context/UsersContext';
import ClearButton from './ClearButton';
import Spinner from './Spinner';
import UserItem from './UserItem';

const Users = () => {
    
    const {users, loading} = useContext(UsersContext);
    

    return (
        <div className="users">
            {loading && <Spinner/>}
            {users && <ClearButton/>}
            <div className="user-list">
                {users && users.items.length > 0 ? ( users.items.map(user => { 
                    return <UserItem key={user.id} user={user}/>                   
                }))  
                :  
                   (users && users.items.length === 0 &&  <p className="text-center not-found-record">Записи не найдены...Проверьте правильность написания.</p>
                ) }
            </div>  
        </div>
    )
}

export default Users
