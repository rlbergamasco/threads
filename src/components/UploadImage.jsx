import React, { useState } from "react";
import { Typography, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';

const UploadImage = ({ message, defaultImageURL, setImageURL }) => {
  const [selectedImage, setSelectedImage] = useState(defaultImageURL || defaultImageURL === '' ? defaultImageURL : null);
  let m = message ? message : "Upload Outfit Photo!";


  return (
    <Box sx={{ p: 2, border: 1, borderColor: 'primary' }} >
      <Typography>{m}</Typography>
      {selectedImage && (
        <div>
          <img alt="not fount" width={"250px"} src={typeof selectedImage == "string" ? `/images/${selectedImage}` : URL.createObjectURL(selectedImage)} />
          <Button onClick={() => setSelectedImage(null)}>Remove</Button>
        </div>
      )}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          setImageURL(URL.createObjectURL(event.target.files[0]));
        }}
      />
    </Box>
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