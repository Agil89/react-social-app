import s from './MyPosts.module.css'
import React from 'react'
import MyPostReduxForm from './MyPostForm/MyPostForm';


const MyPosts = React.memo(props =>{
  console.log('hellouu')
  
  let onAddPost = (values) => {
    props.addPost(values.postValue)
  }

    return (
      <div>
      <div>My posts
        <div>
          <MyPostReduxForm onSubmit={onAddPost} />
        </div>
        {props.fullPost}
      </div>
    </div>
    )
});

export default MyPosts