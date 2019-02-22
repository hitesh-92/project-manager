const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {

    switch(action.type){

        case 'LOGIN_ERROR':
            return{
                ...state,
                authError: 'Login Failed'
            }
        
        case 'LOGIN_SUCCESS':
            console.log('loggin INN')
            return{
                ...state,
                authError: null
            }
        
        case 'SIGNOUT_SUCCESS':
            console.log('signoued outtt')
            return state
        
        default:
            return state

    }
        

    // return state
}

export default authReducer;