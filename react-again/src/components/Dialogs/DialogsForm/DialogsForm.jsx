import { Field, reduxForm } from 'redux-form'
import { maxlengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormControls/FormControls'
import s from './DialogsForm.module.css'

const maxlength30 = maxlengthCreator(30)


const DialogsForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} action="">
            <div>
            <Field component={Textarea} name={'myDialog'} 
            validate={[required,maxlength30]}  />
                <div>
                    <button>Answer</button>
                </div>
             </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({
    form:'dialogs'
})(DialogsForm)

export default DialogsReduxForm;