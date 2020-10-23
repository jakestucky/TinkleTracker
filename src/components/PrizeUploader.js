import React from 'react';
import Dropzone from 'react-dropzone-uploader';

function PrizeUploader(props) {
  // Can also use regular this.state, too
  console.log('props', props.childProps);

  const getUploadParams = () => ({
    url: '/prize',
    // Pass other data to API
    // (available in req.body, on server)
    fields: {
      prize_name: props.prizeProps.prizeName,
      max_goal: props.prizeProps.goalMaxValue,
      child_ID: props.childProps.id,
    },
  });

  const handleSubmit = (files, allFiles) => {
    // Remove files from form
    allFiles.forEach((f) => f.remove());
    window.location.href = '/home';
  };

  return (
    <>
      <h3>Upload Prize Picture!</h3>
      <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} />
    </>
  );
}

export default PrizeUploader;
