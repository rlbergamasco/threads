import { Typography, Box, Link, Paper, List, ListSubheader, ListItem, ListItemButton, ListItemAvatar, ListItemText, Button, TextField } from '@mui/material';
import { OutfitGrid, UploadImage, OutfitImageMarker } from 'components';
import { useState } from 'react';

import { Routes, Route, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectOutfits, selectItems, editOutfit } from "appSlice";
import { ItemList, TagList, DateList, Share } from 'components'
import { Add, AddAPhoto } from '@mui/icons-material';

const OutfitEditPage = () => {
    
    let params = useParams();
    const id = params.id;
    const outfits = useSelector(selectOutfits);
    const allItems = useSelector(selectItems);

    let outfit = outfits.filter((o) => o.id == id)[0];

    const dispatch = useDispatch();
    const [items, setItems] = useState(outfit.items);
    const [imageURL, setImageURL] = useState(outfit.imageURL);
    const [notes, setNotes] = useState(outfit.notes);

    const handleSave = () => {
        dispatch(editOutfit({
            id: outfit.id,
            notes: notes,
            imageURL: imageURL,
            items: items,
            date: outfit.date
        }
        ));
    }

    return (
        <Box sx={{width: "100%"}}>
            <Box sx={{width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Link href={`/outfits/${outfit.id}`} underline="none">
                Cancel
            </Link>
            <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>Outfit Details</Typography>
            <Link onClick={handleSave} href={`/outfits/${outfit.id}`} underline="none">
                Save
            </Link>
            </Box>
            {/* <Box
                component="img"
                sx={{
                    margin: "1em 0",
                    width: "300px",
                    height: "300px",
                    objectFit: "cover"
                }}
                alt="The house from the offer."
                src={`/images/${outfit.imageURL}`}
            /> */}
            <Box sx={{ mt: 3 }}>
                <UploadImage message="Replace outfit photo" defaultImageURL={imageURL}></UploadImage>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', pb: 2, mt: 5, }}>
                <Typography variant="h2">Clothing Items</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button href={``} variant="contained" sx={{ textTransform: 'capitalize', width: "50%" }}><Add fontSize="small" />Edit Items in Outfit</Button>
            </Box>

            {/* <Box sx={{ mt: 3 }}>
                <Typography align="center" sx={{ py: 1 }}>Looks like you haven’t added an item yet!</Typography>
            </Box> */}

            {items && (
                <List>
                    {items.map((item) => {
                         const imageRelY = (item.imageRelativeY * 100).toString();
                         const imageRelX = (item.imageRelativeX * 100).toString();
                         const itemName = allItems.filter((testItem) => testItem.id == item.itemId)[0].name;
                        return (
                                <ListItem
                                key={itemName}
                                disablePadding
                                button
                                component={Link}
                                to={''}
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
                        )
                    })}
                </List>
               
            )}

            <Box sx={{ mt: 5 }}>
                <Typography variant="h2">Notes</Typography>
            </Box>

            <TextField label="" sx={{ width: '100%', my: 1, mb: 5 }} />
           
        </Box>
    );
};

export { OutfitEditPage };