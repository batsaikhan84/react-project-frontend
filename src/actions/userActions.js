export const userRegistration = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER'})
        axios.post('http://localhost:3001/registrations', {user: {
                                                            email: this.state.email, 
                                                            password: this.state.password, 
                                                            password_confirmation: this.state.password_confirmation,
                                                            name: this.state.name}}, {withCredentials: true})
                                                            
        .then(response => {
            console.log(response)
            if (response.data.status === 'created') {
                dispatch({ type: 'USER_REGISTRATION', user: response.data.user})
            }
        })
        .catch(error => {
            console.log('registration error', error)
        })
    }
}