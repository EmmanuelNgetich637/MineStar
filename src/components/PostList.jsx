import PostCard from './PostCard'
import Header from './Header'


const PostList = ({posts, setPosts}) => {
  const data = posts.map(post =>{
    return <PostCard id={post.id} key={post.id} image={post.image} likes={post.likes} caption={post.caption} setPosts={setPosts} posts={posts}/>
  })

  return (
    <div className="scroll-container">
      <div className='post-grid'>
        <Header/>
        {data}
      </div>
    </div>
    
  )
}

export default PostList
