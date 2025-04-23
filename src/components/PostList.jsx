import PostCard from './PostCard'

const PostList = ({posts, setPosts}) => {
  const data = posts.map(post =>{
    return <PostCard id={post.id} key={post.id} image={post.image} likes={post.likes} caption={post.caption} setPosts={setPosts} posts={posts}/>
  })

  return (
    <div>
      {data}
    </div>
  )
}

export default PostList
