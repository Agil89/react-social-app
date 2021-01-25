
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Post from './MyPosts/Post/Post.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { Redirect } from 'react-router-dom'




const Profile = (props) =>{
    // let FullPosts = props.fullPost.posts.map(elem=><Post name={elem.name} likeCount={elem.likeCount}/>)
    return (
    <div >
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer  />
    </div>
    )
}

export default Profile