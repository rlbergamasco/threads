import { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectTags, addTag, addItem } from "appSlice";
import { TagSelector } from 'components';
import { AddAPhoto } from '@mui/icons-material';

const LogItemPage = () => {
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
    const id = '';
    // GENERATE ID?
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');
    let tagIds = [];

    const findNewTags = () => {
        Object.keys(selectedTags).forEach(key => {
            newTags[key] = selectedTags[key].filter(tag => !currentTags.some(e => e.title === tag && e.category === key))
        })
    }

    const addNewTagToRedux = (title, category) => {
        const newTag = {
            id: `00-${category === 'Clothing Type' ? 'type' : category.toLowerCase()}`,
            // CHANGE ID NUMBER
            title: title,
            category: category
        };
        dispatch(addTag(newTag));
    }

    const newItem = {
        id: id,
        notes: notes,
        name: name,
        tagIds: tagIds
    };

    const handleSave = () => {
        findNewTags();
        Object.keys(newTags).forEach(category => newTags[category].forEach(title => addNewTagToRedux(title, category)));
        Object.keys(selectedTags).forEach(category => selectedTags[category].forEach(title => tagIds.push(...[currentTags.find(tag => tag.title === title && tag.category === category) ? currentTags.find(tag => tag.title === title && tag.category === category).id : null].filter(el => el !== null))))
        // dispatch(addItem(newItem));
        console.log(tagIds)
    }

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Log an Item</Typography>
                </Box>
            </Box>

            <Box href="" variant="contained"
                sx={{ mt: 7, mx: 'auto', display: "flex", justifyContent: "center", alignItems: "center", textTransform: 'capitalize', width: '100%', maxWidth: "350px", height: "350px", bgcolor: 'divider', borderRadius: "3%" }}>
                <AddAPhoto fontSize="large"></AddAPhoto>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="h2">Name</Typography>
            </Box>

            <TextField label="" value={name} onChange={(event) => setName(event.target.value)} sx={{ width: '100%', my: 1 }} />

            <Box sx={{ mt: 4 }}>
                <Box sx={{ mt: 5 }}>
                    <Typography variant="h2">Tags</Typography>
                    <TagSelector allowEditTags setSelectedTags={setSelectedTags} selectedTags={selectedTags} />
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="h2">Notes</Typography>
                </Box>

                <TextField label="" value={notes} onChange={(event) => setNotes(event.target.value)} sx={{ width: '100%', mt: 1, mb: 7 }} />

                <Box sx={{ position: 'fixed', bottom: 70, left: 0, bgcolor: 'background.paper', width: '100vw', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
                    <Button onClick={handleSave} variant="contained" sx={{ textTransform: 'capitalize', width: '90vw' }}>Save</Button>
                </Box>
            </Box>

        </Box>
    );
};

export { LogItemPage };