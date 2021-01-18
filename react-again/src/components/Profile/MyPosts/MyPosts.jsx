import s from './MyPosts.module.css'
import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) =>{
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
    return (
      <div>
      <div>My posts
        <div>
          <div>
             <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
          <div className={s.addPostButton}>
            <button onClick={ onAddPost }>Add post</button>
          </div>
        </div>
        {props.fullPost}
      </div>
    </div>
    )
}

export default MyPosts