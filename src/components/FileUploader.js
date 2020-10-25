import React from 'react';
import Dropzone from 'react-dropzone-uploader';

function FileUploader(props) {
  // Can also use regular this.state, too
  console.log('props', props.childProps);

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
    window.location.href = 'http://localhost:3000/home#/newgoal';
  };

  return (
    <>
      <h3>Upload to Profile Picture!</h3>
      <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} />
    </>
  );
}

export default FileUploader;
