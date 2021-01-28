import { connect } from "react-redux"
import { follow, setCurrentPage, setUsers, unfollow, setUsersCount, changeIsFetching, followingToggle, getUsers, getUsersWithSettingPage } from "../../redux/user-reducer"
import React from 'react'
import Users from "./Users"
import Preloader from "../common/Preloader"
import { compose } from "redux"
import { currentPageSelector, followingInProgresSelector, getUsersSelector, isFetchingSelector, usersCountSelector, usersForEachPageSelector } from "../../redux/users-selectors"


class UsersC extends React.Component{

    totalCount = 0
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.usersForEachPage)
    }
    onPageChanged = (page) =>{
        this.props.getUsersWithSettingPage(page,this.props.usersForEachPage)
    }

    render () {
        return <>
        {this.props.isFetching ?  <Preloader /> : null }
         <Users usersCount={this.props.usersCount}
        usersForEachPage={this.props.usersForEachPage}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
        followingToggle = {this.props.followingToggle}
        getUsers = {this.props.getUsers}
        getUsersWithSettingPage={this.props.getUsersWithSettingPage}/>
        </>
    }
}



let mapStateToProps = (state) =>{
    return {
        users:getUsersSelector(state),
        usersForEachPage:usersForEachPageSelector(state),
        usersCount:usersCountSelector(state),
        currentPage:currentPageSelector(state),
        isFetching:isFetchingSelector(state),
        followingInProgress: followingInProgresSelector(state)
    }
}
// let mapDispatchToProps = (dispatch) =>{
//     return {
//         follow: (userId) =>{
//             dispatch(followAC(userId))
//         },
//         unfollow:(userId) =>{
//             dispatch(unfollowAC(userId))
//         },
//         setUsers:(users) =>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(p) =>{
//             dispatch(setCurrentPageAC(p))
//         },
//         setUsersCount:(totalCount)=>{
//             dispatch(setUsersCountAC(totalCount))
//         },
//         changeIsFetching:(isFetching)=>{
//             dispatch(changeIsFetchingAC(isFetching))
//         }
//     }
// }

export default compose(
    connect(mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setUsersCount,
    changeIsFetching,followingToggle,getUsers,getUsersWithSettingPage}))(UsersC)

