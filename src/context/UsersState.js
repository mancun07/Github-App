import {useReducer} from 'react'
import UsersContext from './UsersContext'
import UsersReducer from './UsersReducer'

const UsersState = (props) => {
    const initialState = {
        users: '',
        user: '',
        repos: '',
        loading: false,
        error: null
    }


    const [state, dispatch] = useReducer(UsersReducer, initialState);
    
    const searchUsers = async (text) => {
        setLoading()
        const res = await fetch(`https://api.github.com/search/users?q=${text}`);
        const data = await res.json();
        console.log(data)
        dispatch({type: 'SEARCH_USERS', payload: data})
    }

    const getUser = async (login) => {
        setLoading()
        const res = await fetch(`https://api.github.com/users/${login}`);
        const data = await res.json();
        console.log(data)
        dispatch({type: 'GET_USER', payload: data})
    }

    const getRepos = async (login) => {
        setLoading()
        const res = await fetch(`https://api.github.com/users/${login}/repos?per_page=5`);
        const data = await res.json();
        console.log(data)
        dispatch({type: 'GET_REPOS', payload: data})
    }

    
    const setLoading = () => {
        dispatch({type: 'SET_LOADING'})
    }    


    const clearUsers = () => {
        dispatch({type: 'CLEAR_USERS'})
    }


    return (
        <UsersContext.Provider value={{
            users: state.users,
            repos: state.repos,
            loading: state.loading,
            user: state.user,
            error: state.error,
            searchUsers: searchUsers,
            clearUsers: clearUsers,
            getUser: getUser,
            getRepos: getRepos
        }}>
        {props.children}
       </UsersContext.Provider>
    )
}

export default UsersState