const userReducer = (state = { user: [], loading: false, logged_in: false}, action) => {
    switch(action.type) {
        case 'LOADING_USER':
            return {
                ...state,
                user: [...state.user],
                logged_in: false
            }
        case 'USER_LOGIN':
            return {
                ...state,
                user: [...state.user, action.user],
                loading: false,
                logged_in: true
            }
        case 'USER_REGISTRATION':
            return {
                ...state,
                user: [...state.user, action.user],
                loading: false,
                logged_in: true
            }
        case 'CURRENT_USER':
            return {
                ...state,
                user: [...state.user, action.user],
                loading: false,
                logged_in: true
            }
        case 'USER_NOT_LOGGED':
                return {
                    ...state,
                    user: [],
                    loading: false,
                    logged_in: false
                } 
        case 'USER_LOGOUT':
                return {
                    ...state,
                    user: [],
                    loading: false,
                    logged_in: false
            } 
        default: 
        return state
    }
}

export default userReducer