
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Post from './MyPosts/Post/Post.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer'




const Profile = (props) =>{
    // let FullPosts = props.fullPost.posts.map(elem=><Post name={elem.name} likeCount={elem.likeCount}/>)
    return (
    <div >
      <ProfileInfo />
      <MyPostsContainer  />
    </div>
    )
}

export default Profile