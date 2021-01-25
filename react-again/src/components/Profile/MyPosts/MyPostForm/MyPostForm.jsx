import { Field, reduxForm } from 'redux-form'
import React from 'react'
import s from './MyPostForm.module.css'
import { maxlengthCreator, required } from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/FormControls/FormControls'
const maxlength15 = maxlengthCreator(15)

const MyPostForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} action="">
            <div>
                <Field component={Textarea}
                 placeholder='Your post' name={'postValue'} 
                validate={[required,maxlength15]} />
            </div>
            <div className={s.addPostButton}>
              <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({
    form:'myPost'
})(MyPostForm)

export default MyPostReduxForm;