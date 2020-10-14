import React, { useState } from 'react';
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

function FileUploader() {
  // Can also use regular this.state, too
  const [images, setImages] = useState([]);

  const getUploadParams = () => ({
    url: '/upload',
    // Pass other data to API
    // (available in req.body, on server)
    fields: {
      food: 'tacos',
    },
  });

  const handleSubmit = (files, allFiles) => {
    // Remove files from form
    allFiles.forEach((f) => f.remove());

    // Grab image URLs from server
    axios
      .get('/images')
      .then((res) => {
        console.log('data', res.data);
        setImages(res.data);
      })
      .catch((err) => console.error(err));
  };

  console.log('images', images);

  return (
    <>
      <h2>Upload to Profile Picture!</h2>
      <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} />

      <h2>Gallery</h2>
      {images.map((image) => (
        <img src={image} height='100px' />
      ))}
    </>
  );
}

export default FileUploader;
