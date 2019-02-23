const initState = {
    messages: [
        {id:1, message: 'Hold upp'},
        {id:2, message: 'Wait a minute!'}
    ]
}

const messageReducer = (state = initState, action) => {

    switch(action.type){

        case 'ADD_MESSAGE':
            console.log('message successs save')
            return state
        
        case 'ADD_MESSAGE_ERROR':
            console.log('THERE IS ERR msg no send')
            return state

        default:
            return state
    }

}

export default messageReducer