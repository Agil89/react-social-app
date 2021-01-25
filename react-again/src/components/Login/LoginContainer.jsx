import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { authoriseMe } from '../../redux/auth-reducer'
import Login from './Login'

let mapStateToProps = (state) =>{
    return {
        userId:state.auth.userId,
        isAuth:state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps,{authoriseMe}))(Login)
