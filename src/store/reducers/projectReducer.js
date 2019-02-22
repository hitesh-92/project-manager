const initState = {
    projects: [
        {id:1, title:'write blog', content:'creative content'},
        {id:2, title:'write copy', content:'dont you want to'},
        {id:3, title:'write document', content:'who wants to do this'}
    ]
}

const projectReducer = (state = initState, action) => {

    switch(action.type){

        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state

        case 'CREATE_PROJECT_ERROR':
            console.log('create project ERR', action.err)
            return state
        
        default:
            return state
        
    }

}

export default projectReducer;