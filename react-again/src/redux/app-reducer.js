import { getUsersData } from "./auth-reducer";

const SUCCESS_INITIALIZED = 'SUCCESS_INITIALIZED'



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
export const initizializeMe = () =>({type:'SUCCESS_INITIALIZED'})

export const initializeApp = () => (dispatch) =>{
    let promise = dispatch(getUsersData())
    Promise.all([promise]).then(() =>{
        dispatch(initizializeMe())
    })

}


export default appReducer;