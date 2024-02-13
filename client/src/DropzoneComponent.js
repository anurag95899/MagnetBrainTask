import React from 'react';
import Dropzone from 'react-dropzone';

function DropzoneComponent({ handleDrop }) {
  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
        <section className='boxToSelectImage'>
          <div {...getRootProps()} style={dropzoneStyle}>
            <input {...getInputProps()} />
            <p>click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
}
const dropzoneStyle = {
  border: 'none' ,
  color: "#fff",
  textTransform: "capitalize",
  borderRadius: '10px',
  backgroundColor: "#4ebcdd",
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  fontSize: "18px",
};
export default DropzoneComponent;
