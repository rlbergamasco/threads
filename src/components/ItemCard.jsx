import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import PropTypes from 'prop-types';

const ItemCard = (props) => {
  let item = props.item;
  let textVariant = props.textVariant;
  let id = item.id;
  let name = item.name;
  let outfits = useSelector(selectOutfits);
  let imageURL = "";
  let imageRelX = "";
  let imageRelY = "";

  // Getting imageURL for outfit if not supplied
  if (!item.imageURL || item.imageURL === "") {
    let outfitsSorted = [...outfits].sort((a, b) => b.date - a.date);
    for (let outfit of outfitsSorted) {
      for (let item of outfit.items) {
        if (item.itemId === id) {
          imageURL = outfit.imageURL;
          imageRelY = (item.imageRelativeY * 100).toString();
          imageRelX = (item.imageRelativeX * 100).toString();
        }
      }
    }
  } else {
    imageURL = item.imageURL;
  }

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 'none', borderRadius: 0 }}>
      <CardActionArea href={`/items/${id}`}>
        <CardMedia
          height="170"
          alt={name}
        >
          <div style={{ width: "170px", height: "170px", overflow: "hidden" }}>
            <img style={{ margin: "0 0 0 -30%", width: "150%", height: "170px", objectFit: "cover", objectPosition: `${imageRelX}% ${imageRelY}%` }} src={imageURL}></img>
          </div>
        </CardMedia>
        <CardContent sx={{ p: 0, pt: 1, pb: 2 }}>
          <Typography variant={textVariant} gutterBottom sx={{ textAlign: 'center' }} component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

ItemCard.propTypes = {
  textVariant: PropTypes.string
};

ItemCard.defaultProps = {
  textVariant: 'h2'
};

export { ItemCard };