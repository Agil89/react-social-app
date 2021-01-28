import { getUsersData } from "./auth-reducer";

const SUCCESS_INITIALIZED = 'my-app/app/SUCCESS_INITIALIZED'



let initialState = {
    initialized:false
}

const appReducer = (state = initialState,action) =>{
    switch(action.type){
        case SUCCESS_INITIALIZED:
            return {
                ...state,
                initialized:true
            }
       
        default:
            return state;

    }
}
export const initizializeMe = () =>({type:'my-app/app/SUCCESS_INITIALIZED'})

export const initializeApp = () => async (dispatch) =>{
    let promise = dispatch(getUsersData())
    let result = await Promise.all([promise])
       if (result){dispatch(initizializeMe())} 
}


export default appReducer;