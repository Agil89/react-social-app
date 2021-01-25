import { NavLink } from 'react-router-dom'
import s from './Users.module.css'
import * as axios from 'axios'
import { usersAPI } from '../../api/api'

let Users = (props) =>{

    let pageCount=Math.ceil(props.usersCount / props.usersForEachPage)
    let pages = []

    for (let i = 1;i<=pageCount;i++){
        pages.push(i)
 
    }
    return (    
        <div>
            <span>
                {
                    pages.map(p =>{
                        return <span className={props.currentPage === p && s.selectedPage }
                         onClick={() =>{ props.onPageChanged(p) }}>{p}</span>
                    })
                }
            </span>
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

export default Users;