import React, { useState } from "react";
import { Typography} from '@mui/material';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Typography>Upload Outfit Photo!</Typography>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;

export { UploadImage };