import { NavLink } from 'react-router-dom'
import s from './Header.module.css'


function Header(props) {
    return (
    <header className={s.header}>
        <img src='https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg' />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to='/login'> Login </NavLink>}
            
        </div>
        
    </header>
    )
}

export default Header