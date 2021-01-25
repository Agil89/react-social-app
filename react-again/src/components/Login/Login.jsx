import { Redirect } from 'react-router-dom'
import { authoriseMe } from '../../redux/auth-reducer'
import s from './Login.module.css'
import LoginReduxForm from './LoginForm/LoginForm'

let Login = (props) =>{

    const onSubmit = (formData) =>{
        props.authoriseMe(formData)
    }

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.userId}`} />
    }
    return (
    <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
    )
}

export default Login;