import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = ({onAddPost}) => {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState("")
  const [preview, setPreview] = useState(null)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
  
    if (!image) return;
  
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64Image = reader.result;
  
      const newPost = {
        image: base64Image, // now a base64 string
        caption: caption,
        likes: 0,
        reactions:{}
      };
  
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      })
        .then((res) => res.json())
        .then((data) => {
          onAddPost(data);
          setImage(null);
          setCaption("");
          setPreview(null);
          navigate('/')
        });
    };
  
    reader.readAsDataURL(image); // this converts the file to base64
  }
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  function handleCaption(e){
    const value = e.target.value;
    if (value.length <= 200) {
      setCaption(value);
    }
  }

  return (
    <div style={{ position: "relative" }}>
    <button 
      type="button" 
      onClick={() => navigate('/')} 
      style={{ 
        position: "absolute", 
        top: "20px", 
        right: "20px", 
        background: "transparent", 
        border: "none", 
        fontSize: "24px", 
        cursor: "pointer" 
        }}
      >
        ×
    </button>

    <form onSubmit={handleSubmit} className='form'>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "2px dashed #aaa",
          padding: "20px",
          textAlign: "center",
          borderRadius: "8px",
          maxWidth: "30%",
        }}
      >
        <p>Drag and drop an image here, or</p>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
  
      {preview && (
        <div style={{ marginTop: "20px" }}>
          <h4>Preview:</h4>
          <img src={preview} alt="Preview" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      )}
  
      <input
        style={{
          border: "1px  #aaa",
          padding: "1%",
          textAlign: "center",
          borderRadius: "8px",
          minWidth: "30%",
        }}
        type='text'
        value={caption}
        placeholder='Caption...'
        onChange={handleCaption}
      />
      <button type='submit' >Add Post</button>
    </form>

    </div>
  );
  
}

export default Form
