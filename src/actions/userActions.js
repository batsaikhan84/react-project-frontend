import axios from 'axios'
const BASE_URL = 'https://react-project-backend.herokuapp.com'
const REGISTRATION_URL = `${BASE_URL}/registrations`
const SESSIONS_URL = `${BASE_URL}/sessions`
const LOGGGED_IN_URL = `${BASE_URL}/logged_in`
const LOGOUT_URL = `${BASE_URL}/logout`

export const fetchUserRegistration = (state) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER'})
        axios.post(REGISTRATION_URL, {user: {
                                                            email: state.email, 
                                                            password: state.password, 
                                                            password_confirmation: state.password_confirmation,
                                                            name: state.name}}, 
                                                            {withCredentials: true},
                                                            {config: {headers: {'Access-Control-Allow-Origin': '*',}}}
                                                            )                                              
        .then(response => {
            if (response.data.status === 'created') {
                dispatch({ type: 'USER_REGISTRATION', user: response.data.user})
            }
        })
        .catch(error => {
            console.log('registration error', error)
        })
    }
}
export const fetchUserLogin = (state) => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_USER'})
        axios.post(SESSIONS_URL, {user: {
                                                            email: state.email, 
                                                            password: state.password}}, {withCredentials: true})
        .then(response => {
            if (response.data.logged_in) {
                dispatch({ type: 'USER_LOGIN', user: response.data.user})
            } else if (!response.data.logged_in) {
                dispatch({ type: 'USER_NOT_LOGGED'})
            }
        })
        .catch(error => {
            console.log('login error', error)
        })
    }
}
export const fetchCurrentUser = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER'})
        axios.get(LOGGGED_IN_URL, {withCredentials: true}, {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(response => {
          if (response.data.logged_in) {
                dispatch({ type: 'CURRENT_USER', user: response.data.user})
            }
        })
    }
}
export const fetchUserLogout = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER'})
        axios.get(LOGOUT_URL, {withCredentials: true})
        .then(response => {
            dispatch({ type: 'USER_LOGOUT' })
        })
        .catch(error => {
            console.log('logout error', error)
        })
    }
}