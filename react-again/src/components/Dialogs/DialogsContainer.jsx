import Dialogs from './Dialogs';
import { addDialog } from './../../redux/dialogs-reducer'
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) =>{
    return {
        fullData:state.messagesPage,
    }

}


export default compose(
    connect(mapStateToProps,{addDialog}),
    withAuthRedirect
)(Dialogs)
