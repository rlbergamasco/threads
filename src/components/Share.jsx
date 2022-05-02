import React, { useState } from "react";
import { RWebShare } from "react-web-share";
import { Typography, Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

const Share = ({ outfit }) => {
let formattedDate = new Date(outfit.date).toLocaleDateString();

  return (
    <div>
      <RWebShare
        data={{
          text: `Check out my awesome outfit from ${formattedDate}!`,
          url: "",
          title: `Check out my awesome outfit from ${formattedDate}!`
        }}
        onClick={() => console.log("shared successfully!")}
       
      >
        <Button variant="contained" sx={{ textTransform: 'capitalize', margin: "1em 16px 0 16px"}}>Share <ShareIcon sx={{marginLeft: "5px"}} fontSize="small"/></Button>
      </RWebShare>
    </div>
  );
};

export  { Share };