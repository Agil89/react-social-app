import React from 'react'
import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import Post from './Post/Post'
import { connect } from 'react-redux';



let mapStateToProps = (state) =>{
  return {
    fullPost:state.profilePage.posts.map(elem=><Post name={elem.name} likeCount={elem.likeCount} id={elem.id} key={elem.id}/>),
    newPostText:state.profilePage.newPostText,
    posts:state.profilePage.posts
  }

}


const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts)

export default MyPostsContainer
