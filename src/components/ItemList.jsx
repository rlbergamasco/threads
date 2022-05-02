import { List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar, ListSubheader, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectItems } from "appSlice";
import { Link } from "react-router-dom";

const ItemList = ({ outfit }) => {
    let items = outfit.items;
    const allItems = useSelector(selectItems);

    return (
        <List
            dense
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            subheader={<ListSubheader sx={{ mt: 2, mb: 1, color: 'text.primary' }} component="div" ><Typography variant="h2">Clothing Items</Typography></ListSubheader>}
        >
            {items.map((item) => {
                const imageRelY = (item.imageRelativeY * 100).toString();
                const imageRelX = (item.imageRelativeX * 100).toString();
                const itemName = allItems.filter((testItem) => testItem.id == item.itemId)[0].name;
                console.log(itemName)
                return (
                    <ListItem
                        key={itemName}
                        disablePadding
                        button
                        component={Link}
                        to={`/items/${item.itemId}`}
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <div style={{ width: "50px", height: "50px", overflow: "hidden" }}>
                                    <img src={'/images/' + outfit.imageURL} style={{ margin: "0 0 0 -30%", width: "150%", height: "50px", objectFit: "cover", objectPosition: `${imageRelX}% ${imageRelY}%` }}></img>
                                </div>
                            </ListItemAvatar>
                            <ListItemText id={itemName} primary={itemName} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    )
}

export { ItemList };