import { NavLink, Redirect } from 'react-router-dom'
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import React from 'react';
import DialogsReduxForm from './DialogsForm/DialogsForm';


const Dialogs = (props) =>{
    let FullMessages = props.fullData.messages.map(elem=><Message message={elem.message} id={elem.id} key={elem.id}/>)
    let FullDialogs = props.fullData.dialogs.map(elem=><Dialog pathUrl={elem.pathUrl} key={elem.id} nameUrl={elem.nameUrl} />)
    
    let onChangeDialog = (values) =>{
        props.addDialog(values.myDialog)
    }

    return (
        <div className={s.allDialogs}>
            <div className={s.dialogs}>
               {FullDialogs}
            </div>
            <div className={s.messages}>
               {FullMessages}
            <DialogsReduxForm onSubmit={onChangeDialog}/>
            </div>
        </div>
    )
}

export default Dialogs;