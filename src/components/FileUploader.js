import React, { useState } from 'react';
import Dropzone from 'react-dropzone-uploader';

function FileUploader(props) {
  // Can also use regular this.state, too
  console.log('props', props.childProps);

  const [images, setImages] = useState([]);

  const getUploadParams = () => ({
    url: '/upload',
    // Pass other data to API
    // (available in req.body, on server)
    fields: {
      childName: props.childProps.ChildName,
      Age: props.childProps.Age,
      UserId: props.userProps,
    },
  });

  const handleSubmit = (files, allFiles) => {
    // Remove files from form
    allFiles.forEach((f) => f.remove());
  };

  return (
    <>
      <h2>Upload to Profile Picture!</h2>
      <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} />

      {/* <h2>Gallery</h2>
      {images.map((image) => (
        <img src={image} height='100px' />
      ))} */}
    </>
  );
}

export default FileUploader;
