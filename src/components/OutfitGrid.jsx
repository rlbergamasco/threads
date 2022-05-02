import { Grid, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { OutfitCard } from 'components';
import { Link } from "react-router-dom";

const OutfitGrid = ({ outfits, display }) => {
  // console.log(display)
  if (display == "List") {
    return (
      <List
        dense
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      >
        {outfits.map((outfit) => {
          let date = new Date(outfit.date).toLocaleDateString();
          return (
            <ListItem
              key={outfit.id + outfit.date}
              disablePadding
              button
              component={Link}
              to={`/outfits/${outfit.id}`}
            >
              <ListItemButton>
                <ListItemAvatar>
                  <div style={{ width: "100px", height: "100px", overflow: "hidden" }}>
                    <img src={'/images/' + outfit.imageURL} style={{ height: "100px", width: "100px", objectFit: "cover" }}></img>
                  </div>
                </ListItemAvatar>
                <Typography variant="h2" sx={{ marginLeft: "1em" }} primary={date}>{date}</Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    )
  }
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      {outfits.map((outfit, i) =>
      (<Grid item key={i} xs={6} >
        <OutfitCard outfit={outfit} />
      </Grid>))}
    </Grid>
  )
}

export { OutfitGrid };