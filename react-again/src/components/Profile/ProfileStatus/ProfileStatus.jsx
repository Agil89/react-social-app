import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        status:this.props.status
    }
    activateEditMode = () =>{
        console.log(this)
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e) =>{
        this.setState({
            status:e.currentTarget.value
        })
    }

    // updateStatus = (newStatus) =>{
    //     return {
    //         ...this.state,
    //         myStatus: newStatus
    //     }
    // }
    render () {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onChangeStatus}  onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status} type="text"/>
                </div>
                }
            
            </div>
            
        )
    }
    
}

export default ProfileStatus