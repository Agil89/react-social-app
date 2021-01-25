import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageActionCreator } from './../../redux/dialogs-reducer'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';




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
        fullData:state.messagesPage,
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

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
