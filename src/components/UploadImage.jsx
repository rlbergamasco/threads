import React, { useState } from "react";
import { Typography, Button, Box} from '@mui/material';
import { AddAPhoto } from '@mui/icons-material';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box sx={{ p: 2, border: 1, borderColor: 'primary' }} >
      <Typography>Upload Outfit Photo!</Typography>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <Button onClick={()=>setSelectedImage(null)}>Remove</Button>
        </div>
      )}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </Box>
  );
};

export default UploadImage;

export { UploadImage };

// <AddAPhoto fontSize="large" color="primary"></AddAPhoto>