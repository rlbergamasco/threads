import { Grid, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { ItemCard } from 'components';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import { Link } from "react-router-dom";

const FindItemList = ({ items, handleAddItem }) => {
    let outfits = useSelector(selectOutfits);
    

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
          if (!item.imageURL) {
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
          }

          return (
            <ListItem
              key={item.id}
              disablePadding
              button
              // component={Link}
              onClick={handleAddItem}
              // to={`/editOutfit/${outfit.id}`}
              id={item.id}
            >
              <ListItemButton id={item.id}>
                <ListItemAvatar id={item.id}> 
                  <div style={{ width: "100px", height: "100px", overflow: "hidden" }}>
                    <img src={'/images/' + imageURL} style={{ margin: "0 0 0 -30%", width: "150%", height: "100px", objectFit: "cover", objectPosition: `${imageRelX}% ${imageRelY}%` }}></img>
                  </div>
                </ListItemAvatar>
                <Typography id={item.id} variant="h2" sx={{ marginLeft: "1em" }}>{itemName}</Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    )
  
  
}

export { FindItemList };