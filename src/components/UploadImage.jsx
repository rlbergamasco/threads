import React, { useState } from "react";
import { Typography, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { storage } from '../firebase.js'
import "firebase/storage"

const UploadImage = ({ id, message, defaultImageURL, setImageURL }) => {
  const [localURL, setLocalURL] = useState(defaultImageURL || defaultImageURL === '' ? defaultImageURL : null);
  const [uploadProgress, setUploadProgress] = useState(undefined);
  const [uploadError, setUploadError] = useState(undefined);

  let m = message ? message : "Upload Outfit Photo!";


  const handleUpload = (event) => {
    const image = event.target.files[0];
    // setSelectedImage(event.target);

    const uploadTask = storage.ref(`/images/${id}`).put(image)

    uploadTask.on('state_changed',
      (snapshot) => {
        var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)) * 100
        setUploadProgress(progress)
      }, (error) => {
        setUploadError(error)
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL()
          .then(downloadURL => {
            console.log(downloadURL)
            setLocalURL(downloadURL)
            setImageURL(downloadURL)
            setUploadProgress(undefined)
          })
      })
  };

  const handleDelete = () => {
    setLocalURL(null)
    setImageURL(null)
  }

  return (
    <Box sx={{ p: 2, border: 1, borderColor: 'primary' }} >
      <Typography>{m}</Typography>
      {localURL && (
        <div>
          <img alt="not fount" width={"250px"} src={localURL} />
          <Button onClick={handleDelete} > Remove</Button>
        </div>
      )
      }

      {uploadProgress && <Typography>uploadProgress</Typography>}
      {uploadError && <Typography>uploadError</Typography>}

      <input
        type="file"
        name="myImage"
        onChange={handleUpload}
      />
    </Box >
  );
};

export default UploadImage;

export { UploadImage };

UploadImage.propTypes = {
  setImageURL: PropTypes.func
};

UploadImage.defaultProps = {
  setImageURL: () => null
};

// <AddAPhoto fontSize="large" color="primary"></AddAPhoto>