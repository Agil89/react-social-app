import { NavLink } from 'react-router-dom'
import Dialogs from './Dialogs';
import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from './../../redux/dialogs-reducer'
import { connect } from 'react-redux';




// const DialogsContainer = (props) =>{
//     let state = props.store.getState().messagesPage
//     let answer = () =>{
//         props.store.dispatch(addMessageActionCreator());
//     }
//     let UpdateNewMessage = (answerText) =>{
//         props.store.dispatch(updateMessageActionCreator(answerText))
//     }
         

//     return (<Dialogs answer={answer} updateMessage={UpdateNewMessage} fullData={state}
//         dispatch={props.dispatch}  />)
// }

// const DialogsContainer = () =>{
//     return <StoreContext.Consumer>
//       { store => {
//         let state = store.getState()
//         let answer = () =>{
//             store.dispatch(addMessageActionCreator());
//         }
//         let UpdateNewMessage = (answerText) =>{
//             store.dispatch(updateMessageActionCreator(answerText))
//         }
//         return (<Dialogs answer={answer} updateMessage={UpdateNewMessage} fullData={state.messagesPage}
//               />)
//       }
//     } 
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) =>{
    return {
        fullData:state.messagesPage
    }

}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateMessage: (answerText) =>{
            dispatch(updateMessageActionCreator(answerText))
        },
        answer: () =>{
            dispatch(addMessageActionCreator());
        },
       
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;