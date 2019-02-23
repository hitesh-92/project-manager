export const addMessage = (message) => {

    return(dispatch, getState, {getFirebase, getFirestore}) => {

        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid

        console.log('actions::::',message)

        firestore
            .collection('messages')
            .add({
                message: message,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                createdAt: new Date()
            })
            .then(() => {
                dispatch({type: 'ADD_MESSAGE', message})
            })
            .catch(err => {
                console.log('Major Errr,', err)
                dispatch({type: 'ADD_MESSAGE_ERROR', err})
            })

    }

}