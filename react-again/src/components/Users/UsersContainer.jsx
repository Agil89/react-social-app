import { connect } from "react-redux"
import { followAC, setUsersAC, unfollowAC } from "../../redux/user-reducer"
import Users from "./Users"
import UsersC from './UsersC'

let mapStateToProps = (state) =>{
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow:(userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users) =>{
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC)

export default UsersContainer;