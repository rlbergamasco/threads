import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const OutfitCard = ({ outfit }) => {
  let imageURL = outfit.imageURL;
  let date = new Date(outfit.date);

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 'none', borderRadius: 0 }}>
      <CardActionArea href={`/outfits/${outfit.id}`}>
        <CardMedia
          component="img"
          height="170"
          image={imageURL}
          alt={date.toLocaleDateString()}
        />
        <CardContent sx={{ p: 0, pt: 1, pb: 2 }}>
          <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }} component="div">
            {date.toLocaleDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export { OutfitCard };