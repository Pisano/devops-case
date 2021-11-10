import { useState } from 'react';

function Form({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length && content.trim().length) {
      onSubmit({
        title,
        content,
      });
      setTitle('');
      setContent('');
    } else {
      setErr("Please fill all required fields.");
    }
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h3>Create New Post</h3>
      <div>
        <label>Title</label>
        <br />
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <br />
        <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
      </div>
      <div style={{color: "red"}}>{ err }</div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
