import React from 'react'
import s from './FormControls.module.css'

export const FormControl = ({input,meta,child,...props}) =>{
    const  hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            { hasError && <span className={s.errorText}>{meta.error}</span>}
        </div>
    )

}
// Previuous version

// export const Input = ({input,meta,...props}) =>{
//     const  hasError = meta.touched && meta.error;
//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : "")}>
//             <div>
//                 <input {...input} {...props} />
//             </div>
//             { hasError && <span className={s.errorText}>{meta.error}</span>}
//         </div>
//     )
// }

export const Textarea = (props) =>{
        const {input,meta,child,...restProps} = props;
        return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) =>{
    const {input,meta,child,...restProps} = props;
    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
}