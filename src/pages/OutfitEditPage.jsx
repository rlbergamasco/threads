import * as React from 'react';
import { Typography, Box, Paper, Link, List, ListSubheader, ListItem, ListItemButton, ListItemAvatar, ListItemText, Button, TextField, IconButton } from '@mui/material';
import { OutfitGrid, UploadImage, OutfitImageMarker } from 'components';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectOutfits, selectItems, editOutfit } from "appSlice";
import { useNavigate } from "react-router-dom";
import { Add } from "@mui/icons-material";
import { FindItemPage } from "pages";

const OutfitEditPage = () => {

    let params = useParams();
    const id = params.id;
    const outfits = useSelector(selectOutfits);
    const allItems = useSelector(selectItems);
    let outfit = outfits.filter((o) => o.id == id)[0];
    const originalOutfit = {
        id: outfit.id,
        notes: outfit.notes,
        imageURL: outfit.imageURL,
        items: [...outfit.items],
        date: outfit.date
    };
    const dispatch = useDispatch();
    const location = useLocation();
    const [addingItemsView, setAddingItemsView] = useState(false);
    const [imageURL, setImageURL] = useState(outfit.imageURL);
    const [notes, setNotes] = useState(outfit.notes);
    const [items, setItems] = useState(outfit.items);

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

    const handleCancel = () => {
        dispatch(editOutfit(originalOutfit));
    }


    if (!addingItemsView) {
        return (
            <Box sx={{ width: "100%" }}>
                <Box sx={{ position: 'fixed', top: 0, left: 0, zIndex: 10, p: 3, pb: 2, width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: 'background.paper' }}>
                    <Link onClick={handleCancel} href={`/outfits/${outfit.id}`} underline="none">
                        Cancel
                    </Link>
                    <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>Outfit Details</Typography>
                    <Link onClick={handleSave} href={`/outfits/${outfit.id}`} underline="none">
                        Save
                    </Link>
                </Box>
                <Box sx={{ mt: 6 }}>
                    <UploadImage id={outfit.id} message="Replace outfit photo" setImageURL={setImageURL} defaultImageURL={imageURL}></UploadImage>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', pb: 2, mt: 5, }}>
                    <Typography variant="h2">Clothing Items</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                </Box>

                {!items && (<Box sx={{ mt: 3 }}>
                    <Typography align="center" sx={{ py: 1 }}>Looks like you haven’t added an item yet!</Typography>
                </Box>)}

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
                                    secondaryAction={
                                        <IconButton onClick={() => {
                                            let updatedItems = items.filter((i) => i.itemId != item.itemId);
                                            setItems(updatedItems);

                                        }} color="primary" edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <div style={{ width: "50px", height: "50px", overflow: "hidden" }}>
                                                <img src={outfit.imageURL} style={{ margin: "0 0 0 -30%", width: "150%", height: "50px", objectFit: "cover", objectPosition: `${imageRelX}% ${imageRelY}%` }}></img>
                                            </div>
                                        </ListItemAvatar>
                                        <ListItemText id={itemName} primary={itemName} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>

                )}
                <Box>

                    <Button onClick={() => setAddingItemsView(true)} variant="contained" sx={{ textTransform: 'capitalize', width: "100%", mt: 1 }}><Add fontSize="small" />Add Item</Button>
                </Box>

                <Box sx={{ mt: 5 }}>
                    <Typography variant="h2">Notes</Typography>
                </Box>

                <TextField label="" value={notes} onChange={(event) => setNotes(event.target.value)} sx={{ width: '100%', mt: 1, mb: 7 }} />

            </Box>
        )
    } else {
        return (
            <FindItemPage setAddingItemsView={setAddingItemsView} outfitItems={items} setItems={setItems} />
        )
    }

};

export { OutfitEditPage };