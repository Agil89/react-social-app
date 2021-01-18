

const ADD_MESSAGE = 'ADD-MESSAGE'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    messages:[
        {message:'HI how are you?'},
        {message:'Its a good day'},
        {message:'Nice to meet you'}],
    newMessage:'',
    dialogs: [
        {pathUrl:'1',nameUrl:'Aqil'},
        {pathUrl:'2',nameUrl:'Eli'},
        {pathUrl:'3',nameUrl:'Elman'}]
}

const dialogsReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                message:state.newMessage
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessage = ''
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            let stateCopy = {...state}
            stateCopy.newMessage = action.newMessage;
            return stateCopy;
        default:
            return state;

    }
}

export const addMessageActionCreator = () =>({type:'ADD-MESSAGE'})

export const updateMessageActionCreator = (answerText) =>({type:'UPDATE-NEW-MESSAGE-TEXT', newMessage:answerText})


export default dialogsReducer;