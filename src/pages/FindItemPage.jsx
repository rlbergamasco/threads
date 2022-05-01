import { useState } from 'react';
import { Typography, Box, Button, Fab, TextField } from '@mui/material';
import { ItemGrid, FilterMenu } from 'components';
import { useSelector } from 'react-redux';
import { selectItems } from "appSlice";
import { selectSort, selectDisplay, changeSort, changeDisplay, selectSelectedTags, changeSelectedTags } from "closetSlice";
import { Search, Tune, Add } from '@mui/icons-material';

const FindItemPage = () => {
    const items = useSelector(selectItems);
    const [openMenu, setOpenMenu] = useState(false);
    const sort = useSelector(selectSort);
    const display = useSelector(selectDisplay);
    const sortOptions = ['Alphabetical', 'Most Recently Worn', 'Least Recently Worn', 'Most Worn', 'Least Worn', 'Date Added: Most Recent', 'Date Added: Least Recent'];

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Find an Item</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button href="javascript:history.back()" variant="contained" sx={{ textTransform: 'capitalize', width: "20%"}}>Cancel</Button>
                </Box>
            </Box>

            <Box sx={{ mt: 7 }}>
                <TextField label="Search for item..." sx={{ width: '100%', my: 1 }} />
            </Box>

            <Box sx={{ mt: 3 }}>
                <ItemGrid items={items} />
            </Box>

            <FilterMenu
                open={openMenu}
                setOpen={setOpenMenu}
                sort={sort}
                changeSort={changeSort}
                sortOptions={sortOptions}
                display={display}
                changeDisplay={changeDisplay}
                selectSelectedTags={selectSelectedTags}
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

export { FindItemPage };