import { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { selectTags, addTag } from "appSlice";
import { TagSelector } from 'components';

const LogItemPage = () => {
    let selectedTags = {
        Type: [],
        Color: [],
        Occasion: [],
        Weather: [],
        Other: [],
    };

    let newTags = {
        Type: [],
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
    const [tagIds, setTagIds] = useState([]);

    const findNewTags = () => {
        Object.keys(selectedTags).forEach(key => {
            newTags[key] = selectedTags[key].filter(tag => !currentTags.some(e => e.label === tag && e.category === (key === 'Type' ? 'Clothing Type' : key)))
        })
    }

    const handleTags = () => {
        findNewTags();
        // Add new tags to redux
        // find tag ids and setTagIds
        // add newItem to redux
    }

    const newItem = {
        id: id,
        notes: notes,
        name: name,
        tagIds: tagIds
    };

    const handleSave = () => {
        alert('not actually saved')
        handleTags();
    }

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Log an Item</Typography>
                </Box>
            </Box>

            <Box sx={{ mt: 7 }}>
                <Typography variant="h2">Name</Typography>
            </Box>

            <TextField label="" value={name} onChange={(event) => setName(event.target.value)} sx={{ width: '100%', my: 1 }} />

            <Box sx={{ mt: 2 }}>
                <Button href="/log" variant="contained" sx={{ textTransform: 'capitalize', width: "100%", height: "300px"}}><Add fontSize="large"/>Tap to add a photo!</Button>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h2">Tags</Typography>
                <TagSelector allowEditTags setSelectedTags={setSelectedTags} selectedTags={selectedTags} />
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="h2">Notes</Typography>
            </Box>

            <TextField label="" value={notes} onChange={(event) => setNotes(event.target.value)} sx={{ width: '100%', mt: 1, mb: 5 }} />

            <Box sx={{ position: 'fixed', bottom: 70, left: 0, bgcolor: 'background.paper', width: '100vw', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button href="javascript:history.back()" variant="contained" sx={{ textTransform: 'capitalize', width: '90vw'}}>Save</Button>
            </Box>

        </Box>
    );
};

export { LogItemPage };