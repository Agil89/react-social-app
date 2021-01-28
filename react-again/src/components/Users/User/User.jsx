import { NavLink } from 'react-router-dom'
import s from './User.module.css'


let User = (props) =>{
    return (    
        <div>
        {
            props.users.map(u =>
                <div className={s.mainDiv} key={u.id}>
                    <div className={s.firstDiv}>
                        <div>
                            <NavLink to = {'profile/' + u.id}>
                         <img className={s.profileAva} 
                         src={u.photos.small !=null ? u.photos.small: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt=""/>
                             </NavLink>
                        </div>
                        <div>
                        {u.followed ? <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={()=>{
                            props.unfollow(u.id)} } className={s.followBtn}>Unfollow</button> 
                        : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={()=>{
                            props.follow(u.id)} } className={s.followBtn}>Follow</button> }
                        </div>
                    </div>
                    <div className={s.secondDiv}>
                        <div className={s.info}>
                            <span>{u.name}</span>
                            <span>{u.status}</span>
                        </div>
                        {/* <div className={s.locationInfo}>
                            <span>{u.location.country}</span>
                            <span>{u.location.city}</span>
                        </div> */}
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default User;