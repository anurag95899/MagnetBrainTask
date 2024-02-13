// App.js
import React, { useState } from 'react';
import axios from 'axios';
import DropzoneComponent from './DropzoneComponent';
import UploadedFilesComponent from './UploadedFilesComponent';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);

  const handleDrop = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    try {
      await axios.post('http://localhost:5000/upload', formData);
      alert('File uploaded successfully');
      setFiles([...files, acceptedFiles[0]]);
    } catch (error) {
      console.error(error);
      alert('Error uploading file');
    }
  };

  const handleDelete = async (index, filename) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${filename}`);
      const updatedFiles = files.filter((file, i) => i !== index);
      setFiles(updatedFiles);
      alert('File deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting file');
    }
  };

  const handleDownload = async (filename) => {
    try {
      const response = await axios.get(`http://localhost:5000/download/${filename}`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      alert('File downloaded successfully');
    } catch (error) {
      console.error(error);
      alert('Error downloading file');
    }
  };

  return (
    <div className="container">
       <div className='drag-div'>
      <h1>Drag and Drop File Upload task</h1>
      <DropzoneComponent handleDrop={handleDrop} />
      </div>
      
      <UploadedFilesComponent
        files={files}
        handleDelete={handleDelete}
        handleDownload={handleDownload}
      />
    </div>
  );
}

export default App;

