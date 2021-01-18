import s from './Friends.module.css'

const Friends = (props) =>{
    let AllFriends = props.friends.map(elem=><div className={s.friend}>
        <img className={s.friendAva} src={elem.ava} alt=""/>
        <span>{elem.name}</span>
    </div>)

    return (
        <div>
        <div className={s.friendText}>
            <span>Friends</span>
        </div>
        <div className={s.allFriends}>
            {AllFriends}
        </div>
    
        </div>
    )
}
export default Friends;