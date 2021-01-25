import { NavLink, Redirect } from 'react-router-dom'
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import React from 'react';


// const FullDialogs = () => AllDialogs.map(elem =>{
//     return <Dialog pathUrl={elem.pathUrl} nameUrl={elem.nameUrl} />
// })


// const FullMessages = () => AllMessages.map(elem =>{
//     return <Message message={elem.message} />
// })


const Dialogs = (props) =>{
    let FullMessages = props.fullData.messages.map(elem=><Message message={elem.message} id={elem.id} key={elem.id}/>)
    let FullDialogs = props.fullData.dialogs.map(elem=><Dialog pathUrl={elem.pathUrl} key={elem.id} nameUrl={elem.nameUrl} />)
    
    let answer = () =>{
        props.answer();
    }
    let UpdateNewMessage = (e) =>{
        let answerText = e.target.value
        props.updateMessage(answerText)
    }


    return (
        <div className={s.allDialogs}>
            <div className={s.dialogs}>
               {FullDialogs}
            </div>
            <div className={s.messages}>
               {FullMessages}
               <div>
                <textarea onChange={UpdateNewMessage}  value={props.fullData.newMessage} ></textarea>
                <div>
                <button onClick={answer}  >Answer</button>
                </div>
             </div>
            </div>
        </div>
    )
}

export default Dialogs;