import Paginator from '../common/Paginator/Paginator'
import User from './User/User'
import s from './Users.module.css'

let Users = (props) =>{
    return (    
        <div>
            <User users={props.users} followingInProgress={props.followingInProgress}
            unfollow={props.unfollow} follow={props.follow} />
             <div className={s.parentofPaginator}>
                <Paginator usersCount={props.usersCount}
                usersForEachPage={props.usersForEachPage}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}/>
            </div>
        </div>
    )
}

export default Users;