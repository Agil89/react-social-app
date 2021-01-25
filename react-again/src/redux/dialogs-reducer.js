
const ADD_DIALOG = 'ADD_DIALOG'

let initialState = {
    messages:[
        {id:1,message:'HI how are you?'},
        {id:2,message:'Its a good day'},
        {id:3,message:'Nice to meet you'}],
    dialogs: [
        {id:1,pathUrl:'1',nameUrl:'Aqil'},
        {id:2,pathUrl:'2',nameUrl:'Eli'},
        {id:3,pathUrl:'3',nameUrl:'Elman'}]
}

const dialogsReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_DIALOG:{
            let newMessage = action.myDialog
            return {
                ...state,
                messages : [...state.messages,{id:10,message:newMessage}]
            }
        }
        
        default:
            return state;

    }
}

export const addDialog = (myDialog) =>({type:'ADD_DIALOG',myDialog})

export default dialogsReducer;