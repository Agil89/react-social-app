import Friends from "./Friends"
import { connect } from 'react-redux';



let mapStateToProps = (state) =>{
  return {
    friends:state.sidebarList.friends
  }

}
let mapDispatchToProps = (dispatch) =>{
  return {
   
  }
}

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)


// const FriendsContainer = () =>{
//     return <StoreContext.Consumer>
//       { store => {
//         return (<Friends friends={store.getState().sidebarList.friends} />)
//       }
//     } 
//     </StoreContext.Consumer>
// }

export default FriendsContainer;