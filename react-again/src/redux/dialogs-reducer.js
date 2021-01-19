

const ADD_MESSAGE = 'ADD-MESSAGE'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    messages:[
        {id:1,message:'HI how are you?'},
        {id:2,message:'Its a good day'},
        {id:3,message:'Nice to meet you'}],
    newMessage:'',
    dialogs: [
        {id:1,pathUrl:'1',nameUrl:'Aqil'},
        {id:2,pathUrl:'2',nameUrl:'Eli'},
        {id:3,pathUrl:'3',nameUrl:'Elman'}]
}

const dialogsReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = state.newMessage
            return {
                ...state,
                newMessage: '',
                messages : [...state.messages,{id:10,message:newMessage}]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMessage
            }
        default:
            return state;

    }
}

export const addMessageActionCreator = () =>({type:'ADD-MESSAGE'})

export const updateMessageActionCreator = (answerText) =>({type:'UPDATE-NEW-MESSAGE-TEXT', newMessage:answerText})


export default dialogsReducer;