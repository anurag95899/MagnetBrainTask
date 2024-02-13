// UploadedFilesComponent.js
import React from 'react';

function UploadedFilesComponent({ files, handleDelete, handleDownload }) {
  return (
    <div className="uploads-file-div">
      <h2>Uploaded Files:</h2>
      <div className="img-container">
        {files.map((file, index) => (
          <div key={index} className="imageCard">
            <div className="imgCard">
              <img src={`http://localhost:5000/uploads/${file.name}`} alt={file.name} />
            </div>
            <h4>File Name :- {file.name} ({((file.size) / 1024).toFixed(2)})kb</h4>
            <div className="img-btn">
              <button onClick={() => handleDownload(file.name)}>Download</button>
              <button className="img-delete-btn" onClick={() => handleDelete(index, file.name)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadedFilesComponent;
