import { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectTags, addTag, addItem } from "appSlice";
import { TagSelector, UploadImage } from 'components';
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const LogItemPage = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const id = uuidv4();

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
        console.log(change);
        selectedTags[Object.keys(change)[0]] = Object.values(change)[0];
    };


    const currentTags = useSelector(selectTags);
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');
    const [imageURL, setImageURL] = useState('');
    let tagIds = [];

    const findNewTags = () => {
        Object.keys(selectedTags).forEach(key => {
            newTags[key] = selectedTags[key].filter(tag => !currentTags.some(e => e.title === tag && e.category === key))
        })
    }

    const addNewTagToRedux = (title, category) => {
        const newTag = {
            id: id,
            title: title,
            category: category
        };
        tagIds.push(id);
        dispatch(addTag(newTag));
    }

    const newItem = {
        id: uuidv4(),
        dateAdded: new Date().getTime(),
        notes: notes,
        name: name,
        tagIds: tagIds,
        imageURL: imageURL
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleSave = () => {
        findNewTags();
        Object.keys(selectedTags).forEach(category => selectedTags[category].forEach(title => tagIds.push(...[currentTags.find(tag => tag.title === title && tag.category === category) ? currentTags.find(tag => tag.title === title && tag.category === category).id : null].filter(el => el !== null))))
        Object.keys(newTags).forEach(category => newTags[category].forEach(title => addNewTagToRedux(title, category)));
        dispatch(addItem(newItem));
        sleep(1000).then(() => { navigate(-1) });
    }

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Log an Item</Typography>
                </Box>
            </Box>

            <Box sx={{ mt: 7 }}>
                <UploadImage id={id} defaultImageURL={imageURL} setImageURL={setImageURL} />
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="h2">Name</Typography>
            </Box>

            <TextField label="" value={name} onChange={(event) => setName(event.target.value)} sx={{ width: '100%', my: 1 }} />

            <Box sx={{ mt: 3 }}>
                <Box sx={{ mt: 3 }}>
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

/*

<Box href="" variant="contained"
                sx={{ mt: 7, mx: 3, display: "flex", justifyContent: "center", alignItems: "center", textTransform: 'capitalize', width: "350px", height: "350px", bgcolor: 'text.disabled', borderRadius: "3%" }}>
                <AddAPhoto fontSize="large"></AddAPhoto>
            </Box>

*/
// href="javascript:history.back()"