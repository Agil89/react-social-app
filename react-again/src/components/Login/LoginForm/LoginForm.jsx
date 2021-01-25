import { Field, reduxForm } from 'redux-form'
import { required } from '../../../utils/validators/validators'
import { Input } from '../../common/FormControls/FormControls'
import s from './LoginForm.module.css'

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} action="">
            <div>
            <Field component={Input} name={"email"}  placeholder={"Email"}
            validate={[required]} />
            </div>
            <div>
            <Field component={Input} name={"password"}  
            placeholder={"Password"} type={"password"} validate={[required]} />
            </div>
            <div>
            <Field component={Input} type={"checkbox"} 
            name={"rememberMe"} />remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

export default LoginReduxForm;