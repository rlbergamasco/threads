import { Grid, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { ItemCard } from 'components';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import { Link } from "react-router-dom";

const ItemGrid = ({ display, items }) => {
    let outfits = useSelector(selectOutfits);

  if (display == "List") {
    return (
      <List
        dense
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      >
        {items.map((item) => {
          const itemName = item.name;
          let imageURL = "";
          let imageRelX = "";
          let imageRelY = "";

          // Getting imageURL for outfit if not supplied
          if (!item.imageURL || item.imageURL === "") {
            let outfitsSorted = [...outfits].sort((a, b) => b.date - a.date);
            for (let outfit of outfitsSorted) {
              for (let i of outfit.items) {
                if (i.itemId === item.id) {
                  imageURL = outfit.imageURL;
                  imageRelY = (i.imageRelativeY * 100).toString();
                  imageRelX = (i.imageRelativeX * 100).toString();
                }
              }
            }
          } else {
            imageURL = item.imageURL;
          }

          return (
            <ListItem
              key={itemName}
              disablePadding
              button
              component={Link}
              to={`/items/${item.id}`}
            >
              <ListItemButton>
                <ListItemAvatar>
                  <div style={{ width: "100px", height: "100px", overflow: "hidden" }}>
                    <img src={imageURL} style={{ margin: "0 0 0 -30%", width: "150%", height: "100px", objectFit: "cover", objectPosition: `${imageRelX}% ${imageRelY}%` }}></img>
                  </div>
                </ListItemAvatar>
                <Typography variant="h2" sx={{ marginLeft: "1em" }}>{itemName}</Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    )
  }
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      {items.map((item, i) =>
      (<Grid item key={i} xs={6} >
        <ItemCard item={item} />
      </Grid>))}
    </Grid>
  )
}

export { ItemGrid };