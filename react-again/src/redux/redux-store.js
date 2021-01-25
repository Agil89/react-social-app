import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import userReducer from './user-reducer'
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'




let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    sidebarList:sidebarReducer,
    usersPage: userReducer,
    auth:authReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));



export default store;