import { connect } from "react-redux"
import { follow, setCurrentPage, setUsers, unfollow, setUsersCount, changeIsFetching } from "../../redux/user-reducer"
// import Users from "./OldUsers"
import * as axios from 'axios'
import React from 'react'
import Users from "./Users"
import Preloader from "../common/Preloader"


class UsersC extends React.Component{
    componentDidMount(){
        this.props.changeIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersForEachPage}`).then(response =>{
                this.props.setUsers(response.data.items)
                this.props.changeIsFetching(false)

                // this.props.setUsersCount(response.data.totalCount)

        })
    }
    onPageChanged = (p) =>{
        this.props.setCurrentPage(p);
        this.props.changeIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersForEachPage}`).then(response =>{
                this.props.setUsers(response.data.items)
                this.props.changeIsFetching(false)
        })
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
        unfollow={this.props.unfollow}/>
        </>
    }
}



let mapStateToProps = (state) =>{
    return {
        users:state.usersPage.users,
        usersForEachPage:state.usersPage.usersForEachPage,
        usersCount:state.usersPage.usersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
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

const UsersContainer = connect(mapStateToProps,
    {follow,unfollow,setUsers,setCurrentPage,setUsersCount,changeIsFetching})(UsersC)

export default UsersContainer;