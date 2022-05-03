import { Typography, Box, Paper, Link, List, ListSubheader, ListItem, ListItemButton, ListItemAvatar, ListItemText, Button, TextField, IconButton } from '@mui/material';
import { useState } from 'react';
import { FindItemPage } from "pages";
import { useSelector, useDispatch } from 'react-redux';
import { selectOutfits, selectItems, addOutfit } from "appSlice";
import { Add, AddAPhoto } from '@mui/icons-material';
import { OutfitCard, PhotoAPI, UploadImage } from 'components';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const LogOutfitPage = () => {
    const [addingItemsView, setAddingItemsView] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [notes, setNotes] = useState("");
    const [items, setItems] = useState([]);
    const unformattedDate = new Date()
    const allItems = useSelector(selectItems);
    const allOutfits = useSelector(selectOutfits);
    const hour = unformattedDate.getHours();
    const currentDate = unformattedDate.toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" })
    let navigate = useNavigate();
    const datePickerFormat = unformattedDate.toISOString().split('T')[0];
    const [pickedDate, setPickedDate] = useState(datePickerFormat);

    const dispatch = useDispatch();
    const id = uuidv4();

    let timeOfDay = "Morning"
    switch (true) {
        case (hour < 12):
            timeOfDay = "Morning"
            break;
        case (hour < 16):
            timeOfDay = "Afternoon"
            break;
        default:
            timeOfDay = "Evening"
            break;
    }

    const handleSave = () => {
        if (items.length == 0) {
            navigate('/home');
            return;
        }
        dispatch(addOutfit({
            id: id,
            notes: notes,
            imageURL: imageURL,
            items: items,
            date: new Date(pickedDate).getTime() + 86400000
        }
        ));
        navigate('/home');
    }

    const todayDateLong = unformattedDate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    // console.log(unformattedDate.getTime())
    console.log(addingItemsView)
    if (!addingItemsView) {
        return (
            <Box>
                <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                        <Typography variant="h1">Log an Outfit</Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: 7, mb: 3 }}>
                    <Typography variant="h2" sx={{ pb: 1 }}>Date</Typography>
                    <TextField
                        id="date"
                        label=""
                        type="date"
                        sx={{ width: '100%' }}
                        value={pickedDate}
                        onChange={(event) => {
                            setPickedDate(event.target.value)
                        }}
                    />
                </Box>

                <UploadImage id={id} defaultImageURL={imageURL} setImageURL={setImageURL} />

                <Box sx={{ display: 'flex', alignItems: 'center', pb: 2, mt: 5, }}>
                    <Typography variant="h2">Clothing Items</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                </Box>

                {items.length == 0 &&
                    (<Box sx={{ mt: 3 }}>
                        <Typography align="center" sx={{ py: 1 }}>Looks like you haven’t added an item yet!</Typography>
                    </Box>)}

                {items && (
                    <List>
                        {items.map((item) => {
                            const imageRelY = (item.imageRelativeY * 100).toString();
                            const imageRelX = (item.imageRelativeX * 100).toString();
                            const itemName = allItems.filter((testItem) => testItem.id == item.itemId)[0].name;
                            let outfitsSorted = [...allOutfits].sort((a, b) => b.date - a.date);

                            const itemImageURL = outfitsSorted.filter((outfit) => outfit.items.some((i) => i.itemId == item.itemId))[0].imageURL;
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
                                                <img src={itemImageURL} style={{ margin: "0 0 0 -30%", width: "150%", height: "50px", objectFit: "cover", objectPosition: `${imageRelX}% ${imageRelY}%` }}></img>
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

                <Box sx={{ position: 'fixed', bottom: 70, left: 0, bgcolor: 'background.paper', width: '100vw', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button onClick={handleSave} variant="contained" sx={{ textTransform: 'capitalize', width: '90vw' }}>Save</Button>
                </Box>

            </Box>
        )
    } else {
        return (
            <FindItemPage setAddingItemsView={setAddingItemsView} outfitItems={items} setItems={setItems} />
        )
    }
};

export { LogOutfitPage };

/*

box with camera in the middle

<Box href="" variant="contained" 
                sx={{ mt: 2, mx: 3, display: "flex", justifyContent: "center", alignItems: "center", textTransform: 'capitalize', width: "350px", height: "350px", bgcolor: 'text.disabled', borderRadius: "3%"}}>
                <AddAPhoto fontSize="large"></AddAPhoto>
            </Box>

camera next to upload image

<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 2, mt: 5 }}>
                <UploadImage></UploadImage>
                <Box sx={{ flexGrow: 1 }} />
                <AddAPhoto fontSize="large"></AddAPhoto>
            </Box>

*/