import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Post from './Post';
import Form from './Form';

function App() {
  const [posts, setPosts] = useState([]);

  const url = `${process.env.REACT_APP_API_URL}/posts`;

  const getPosts = useCallback(() => {
    axios.get(url)
      .then(response => {
        setPosts(response.data);
      })
      .catch(e => console.log(e));
  }, [url]);

  const handleSubmit = (data) => {
    axios.post(url, data)
      .then(response => {
        setPosts([...posts, response.data])
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Posts</h2>
        {posts.map(post =>
          <Post key={post.id} title={post.title} content={post.content} />
        )}
      </header>
      <Form onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
