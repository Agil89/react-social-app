import s from './Friend.module.css'

const Friend = (props) =>{
    return (
        <div className={s.allFriends} >
            <div className={s.friend} >
                <img className={s.friendAva} src={props.ava} alt=""/>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default Friend;