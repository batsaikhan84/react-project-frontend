import axios from 'axios'

export const fetchUserRegistration = (state) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER'})
        axios.post('http://localhost:3001/registrations', {user: {
                                                            email: state.email, 
                                                            password: state.password, 
                                                            password_confirmation: state.password_confirmation,
                                                            name: state.name}}, {withCredentials: true})                                              
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
export const fetchCurrentUser = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER'})
        axios.get('http://localhost:3001/logged_in', {withCredentials: true})
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
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
        .then(response => {

        })
        .catch(error => {
            console.log('logout error', error)
        })
    }
}