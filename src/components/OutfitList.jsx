import { List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar, ListSubheader, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectOutfits } from "appSlice";
import { Link } from "react-router-dom";

const OutfitList = ({ item }) => {
    const outfits = useSelector(selectOutfits);
    let outfitsSorted = [...outfits].sort((a, b) => b.date - a.date);
    let itemOutfits = outfitsSorted.filter((outfit) => outfit.items.some((i) => i.itemId == item.id));
    let uniqOutfitsSorted = Array.from(new Set(itemOutfits.map(o => o.id))).map(id => {
        return itemOutfits.find(a => a.id === id)
    });
    
    return (
        <List 
            dense 
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
            subheader={<ListSubheader sx={{margin: "1em 0", color: 'text.primary'}} component="div" ><Typography variant="h2">Outfits Containing Item</Typography></ListSubheader>}
        >
        {uniqOutfitsSorted.map((outfit) => {
            let date = new Date(outfit.date).toLocaleDateString();
        return (
            <ListItem
            key={outfit.id}
            disablePadding
            button
            component={Link}
            to={`/outfits/${outfit.id}`}
            >
            <ListItemButton>
                <ListItemAvatar>
                <div style={{ width: "50px", height: "50px", overflow: "hidden" }}>
                <img src={'/images/' + outfit.imageURL} style={{height: "50px", width: "50px", objectFit: "cover"}}></img>
                </div>
                </ListItemAvatar>
                <ListItemText id={outfit.id} primary={date} />
            </ListItemButton>
            </ListItem>
            );
        })}
    </List>
    )
}

export { OutfitList };