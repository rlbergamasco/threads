import { Typography, Box, Link, Paper, List, ListSubheader, ListItem, Button, TextField } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';

import { OutfitGrid } from 'components';
import { Routes, Route, useParams } from "react-router-dom";
import { selectItems, selectOutfits, selectTags, addTag, addItem, editItem } from "appSlice";
import { ItemList, TagList, DateList, OutfitList, TagSelector, UploadImage } from 'components'
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";

const ItemEditPage = () => {

    let params = useParams();
    const id = params.id;
    const items = useSelector(selectItems);
    let outfits = useSelector(selectOutfits);

    let item = items.filter((i) => i.id == id)[0]
    let imageURL = "";
    let imageRelX = "";
    let imageRelY = "";
    // Getting imageURL for outfit if not supplied
    if (!item.imageURL) {
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
    }

    const dispatch = useDispatch();
    

    let selectedTags = {
        ['Clothing Type']: [],
        Color: [],
        Occasion: [],
        Weather: [],
        Other: [],
    };

    let newTags = {
        ['Clothing Type']: [],
        Color: [],
        Occasion: [],
        Weather: [],
        Other: [],
    };

    const setSelectedTags = (change) => {
        selectedTags[Object.keys(change)[0]] = Object.values(change)[0];
    };
    const currentTags = useSelector(selectTags);
    const [name, setName] = useState(item.name);
    const [notes, setNotes] = useState(item.notes);
    let tagIds = [];

    for (const tag of item.tagIds) {
        let itemTag = currentTags.filter((curTag) => curTag['id'] == tag)[0];
        console.log(itemTag)
        console.log(selectedTags[`${itemTag.category}`])
        selectedTags[`${itemTag.category}`] = [...selectedTags[`${itemTag.category}`], itemTag.title];
    }

    

    const findNewTags = () => {
        Object.keys(selectedTags).forEach(key => {
            newTags[key] = selectedTags[key].filter(tag => !currentTags.some(e => e.title === tag && e.category === key))
        })
    }

    const addNewTagToRedux = (title, category) => {
        const newTag = {
            id: uuidv4(),
            // CHANGE ID NUMBER
            title: title,
            category: category
        };
        dispatch(addTag(newTag));
    }

    const newItem = {
        id: uuidv4(),
        notes: notes,
        name: name,
        tagIds: tagIds
    };

    const handleSave = () => {
        findNewTags();
        Object.keys(newTags).forEach(category => newTags[category].forEach(title => addNewTagToRedux(title, category)));
        Object.keys(selectedTags).forEach(category => selectedTags[category].forEach(title => tagIds.push(...[currentTags.find(tag => tag.title === title && tag.category === category) ? currentTags.find(tag => tag.title === title && tag.category === category).id : null].filter(el => el !== null))))
        dispatch(editItem({
            id: item.id,
            notes: notes,
            name: name,
            tagIds: tagIds
        }
        ));
        console.log(tagIds)
    }

   



    return (
        <Box sx={{width: "100%"}}>
            <Box sx={{width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Link href={`/items/${item.id}`} underline="none">
                Cancel
            </Link>
            <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>Item Details</Typography>
            <Link onClick={handleSave} href={`/items/${item.id}`} underline="none">
                Save
            </Link>
            </Box>

            <Box sx={{ mt: 7 }}>
                <UploadImage message="You are currently using a default image from an outfit. Upload a different image to customize!"></UploadImage>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="h2">Name</Typography>
            </Box>

            <TextField label="" value={name} onChange={(event) => setName(event.target.value)} sx={{ width: '100%', my: 1 }} />
            <Box sx={{ mt: 3 }}>
                <Typography variant="h2">Tags</Typography>
            </Box>
            <TagSelector allowEditTags setSelectedTags={setSelectedTags} selectedTags={selectedTags} />

            <Box sx={{ mt: 3 }}>
                <Typography variant="h2">Item Notes</Typography>
            </Box>

            <TextField label="" value={notes} onChange={(event) => setNotes(event.target.value)} sx={{ width: '100%', mt: 1, mb: 7 }} />
           
        </Box>
    );
    
};

export { ItemEditPage };