import PostCard from './PostCard'

const PostList = ({posts}) => {
  const data = posts.map(post =>{
    return <PostCard key={post.id} image={post.image} likes={post.likes} caption={post.caption} />
  })

  return (
    <div>
      {data}
    </div>
  )
}

export default PostList
