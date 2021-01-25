import React from 'react'
import { getProfile, getProfileStatus, setUserProfile, updateStatus } from '../../redux/profile-reducer';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) =>({
    profile:state.profilePage.profile,
    status:state.profilePage.status
})

class ProfileContainerClass extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId=2
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
}

    render() {
        return <Profile {...this.props} profile={this.props.profile}
         status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

export default compose(
    connect(mapStateToProps,{getProfile,getProfileStatus,updateStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainerClass)
