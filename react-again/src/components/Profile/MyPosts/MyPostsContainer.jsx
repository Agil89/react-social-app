import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import Post from './Post/Post'
import { connect } from 'react-redux';


// const MyPostsContainer = () =>{

  
//     return <StoreContext.Consumer>
//       { store => {
//         let state = store.getState()
//         let addPost = () => {
//           store.dispatch(addPostActionCreator())
//         }
//         let FullPosts = state.profilePage.posts.map(elem=><Post name={elem.name} likeCount={elem.likeCount}/>)
//         let onPostChange = (text) =>{
//           let action = updateNewPostActionCreator(text)
//           store.dispatch(action);
//         }
//         return (<MyPosts updateNewPostText = {onPostChange} 
//           addPost={addPost} posts={state.profilePage.posts} 
//           newPostText = {state.profilePage.newPostText} fullPost={FullPosts} />)
//       }
//     } 
//     </StoreContext.Consumer>
// }


let mapStateToProps = (state) =>{
  return {
    fullPost:state.profilePage.posts.map(elem=><Post name={elem.name} likeCount={elem.likeCount}/>),
    newPostText:state.profilePage.newPostText,
    posts:state.profilePage.posts
  }

}
let mapDispatchToProps = (dispatch) =>{
  return {
    updateNewPostText: (text) =>{
      let action = updateNewPostActionCreator(text)
      dispatch(action);
      },
      addPost: () =>{
        dispatch(addPostActionCreator())
      },
     
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer
