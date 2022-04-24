import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const OutfitCard = (props) => {
  let imageURL = props.imageURL;
  let date = new Date(props.date);

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 'none', borderRadius: 0 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={'/images/' + imageURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }} component="div">
            {date.toLocaleDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export { OutfitCard };