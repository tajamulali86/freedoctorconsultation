"use client"
import React, { useState } from 'react';
import axios from 'axios';

const FileUploadForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('file', file);
    formData.append('img', img);

    axios.post('http://localhost:8000/api/patients', formData)
      .then(response => {
        console.log(response.data);
        // Handle success
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        // Handle error
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        File:
        <input type="file" name='file'  onChange={(e) => setFile(e.target.files[0])} />
      </label>
      <br />
      <label>
        profile picture:
        <input type="file" name='img' onChange={(e) => setImg(e.target.files[0])} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUploadForm;
