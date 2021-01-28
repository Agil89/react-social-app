import React,{useEffect, useState} from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props)=> {
    const [editmode, setEditmode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () =>{
        setEditmode(true)
        }
    const deactivateEditMode = () =>{
            setEditmode(false)
            props.updateStatus(status)
        }
    const onChangeStatus = (e) =>{
            setStatus(e.currentTarget.value)
        }

        return (
            <div>
                {!editmode &&
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status || 'No status(make double click for adding status)'}</span>
                </div>
                }
                {editmode &&
                <div>
                    <input onChange={onChangeStatus} onBlur={deactivateEditMode} value={status} type="text"/>
                </div>
                }
            
            </div>
            
        )
    }


export default ProfileStatusWithHooks