
const init_state = {
    username:"",
    password:"",
    loggedin: false
}
const loginreducer = (state = init_state, action) => {
    switch(action.type){
        case 'USERNAME':
            return {
                ...state,
                username:action.value
            }
        case 'PASSWORD':
            return {
                ...state,
                password:action.value
            }
        case 'LOGGED_IN':
            return {
                ...state,
                loggedin: action.value
            }
        default:
            return state
    }
}
export default loginreducer;