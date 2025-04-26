import React,{useEffect, useState} from 'react';
import PostCard from './PostCard';
import Header from './Header';


const LikedPage = ({ posts, setPosts }) => {
  const [likedPosts, setLikedPosts] = useState([]);

  // Filter liked posts
  useEffect(() => {
    const filteredPosts = posts.filter(post => post.likes > 0); // or whatever condition for "liked" posts
    setLikedPosts(filteredPosts);
  }, [posts]);

  return (
    <div>
      <h1>Liked Posts</h1>
      <div>
        {likedPosts.length > 0 ? (
          likedPosts.map(post => (
            <div key={post.id}>
              <h3>{post.caption}</h3>
              <img src={post.image} alt={post.caption} />
            </div>
          ))
        ) : (
          <p>No liked posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default LikedPage;