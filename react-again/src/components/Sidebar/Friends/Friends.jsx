import Friend from './Friend/Friend'
import s from './Friends.module.css'

const Friends = (props) =>{
    let AllFriends = props.friends.map(elem=><Friend name={elem.name} ava={elem.ava} id={elem.id} key={elem.id}/>)
    
    return (
        <div>
        <div className={s.friendText}>
            <span>Friends</span>
        </div>
        <div className={s.AllFriends}>
            {AllFriends}
        </div>
        </div>
    )
}
export default Friends;