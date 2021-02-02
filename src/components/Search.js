import React, {useState, useContext} from 'react'
import AlertContext from '../context/AlertContext';
import UsersContext from '../context/UsersContext';

const Search = () => {
    const [text, setText] = useState('');
    const {searchUsers} = useContext(UsersContext);
    const {setAlert, clearAlert} = useContext(AlertContext)


    const onSubmit = (e) => {
        e.preventDefault();
        if (text !== '') {
        searchUsers(text);
        setText('');
        } else {
            setAlert('Поле поиска должно быть заполнено');
            clearAlert();
        }
        

    }

    return (
        <div className="search-form p-1">
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={e => setText(e.target.value.trim())} placeholder="Search Users"/>
                <input type="submit" className="btn btn-block bg-dark" value="Отправить"/>
            </form>
        </div>
    )
}

export default Search
