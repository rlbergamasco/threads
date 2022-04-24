import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";

const ItemCard = (props) => {
  let item = props.item;
  let id = item.id;
  let name = item.name;
  let outfits = useSelector(selectOutfits);
  let imageURL = "";
  let imageRelX = "";
  let imageRelY = "";


// Getting imageURL for outfit if not supplied
  if (!item.imageURL) {
      let outfitsSorted = [...outfits].sort((a, b) => b.date - a.date);
      for (let outfit of outfitsSorted) {
          console.log(outfit)
          for (let item of outfit.items) {
            if (item.itemId == id) {
                imageURL = outfit.imageURL;
                imageRelY = (item.imageRelativeY * 100).toString();
                imageRelX = (item.imageRelativeX * 100).toString();
                console.log(imageRelX)
                console.log(imageRelY)

            }
          }
      }
  }

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 'none', borderRadius: 0 }}>
      <CardActionArea>
        <CardMedia
          height="170"
          alt={name}
        >
            <img style={{ width: "100%", height: "170px", objectFit: "none", objectPosition: `${imageRelX}% ${imageRelY}%`}} src={'/images/' + imageURL}></img>
        </CardMedia>
        <CardContent>
          <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }} component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export { ItemCard };