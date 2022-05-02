import { useState } from 'react';
import { Typography, Box, Button, Fab, TextField } from '@mui/material';
import { ItemGrid, FilterMenu } from 'components';
import { useSelector } from 'react-redux';
import { selectItems } from "appSlice";
import { selectSort, selectDisplay, changeSort, changeDisplay, selectSelectedTags, changeSelectedTags } from "closetSlice";
import { Search, Tune, Add } from '@mui/icons-material';

const ClosetPage = () => {
    const items = useSelector(selectItems);
    const [openMenu, setOpenMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const sort = useSelector(selectSort);
    const display = useSelector(selectDisplay);
    const sortOptions = ['Alphabetical', 'Most Recently Worn', 'Least Recently Worn', 'Most Worn', 'Least Worn', 'Date Added: Most Recent', 'Date Added: Least Recent'];
    const selectedTags = useSelector(selectSelectedTags);

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Closet</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" onClick={() => setSearch(!search)} />
                    <Tune fontSize="large" onClick={() => setOpenMenu(true)} />
                </Box>
                {search?<TextField label="Search" sx={{ width: '90vw', mx: 3}} />: null}
            </Box>

            <Box sx={{ mt: search?15:7 }}>
                <ItemGrid display={display} items={items} />
            </Box>

            <FilterMenu
                open={openMenu}
                setOpen={setOpenMenu}
                sort={sort}
                changeSort={changeSort}
                sortOptions={sortOptions}
                display={display}
                changeDisplay={changeDisplay}
                selectedTags={selectedTags}
                changeSelectedTags={changeSelectedTags}
            />
            <Fab color="primary"
                aria-label="add"
                href="/logItem"
                sx={{
                    margin: 0,
                    top: 'auto',
                    right: 20,
                    bottom: 102,
                    left: 'auto',
                    position: 'fixed',
                }}
            >
                <Add fontSize='large' />
            </Fab>
        </Box>
    );
};

export { ClosetPage };