import s from './Users.module.css'
import * as axios from 'axios'
import React from 'react'

class UsersC extends React.Component{

    componentDidMount(){
        if (this.props.users.length === 0 ){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
                this.props.setUsers(response.data.items)
        })
        }
        
    }
    render () {
        return (    
            <div>
            {
                this.props.users.map(u =>
                    <div className={s.mainDiv} key={u.id}>
                        <div className={s.firstDiv}>
                            <div>
                             <img className={s.profileAva} 
                             src={u.photos.small !=null ? u.photos.small: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt=""/>
                            </div>
                            <div>
                            {u.followed ? <button onClick={()=>{ this.props.unfollow(u.id)} } className={s.followBtn}>Unfollow</button> 
                            : <button onClick={()=>{ this.props.follow(u.id)} } className={s.followBtn}>Follow</button> }
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
}




export default UsersC;