import { useState } from 'react';
import { Typography, Box, Button, Fab, TextField, Link } from '@mui/material';
import { ItemGrid, FilterMenu, ItemList } from 'components';
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
                    <Link href="javascript:history.back()" underline="none">Back</Link>
                </Box>
            </Box>

            <Box sx={{ mt: 7 }}>
                <TextField label="Search for item..." sx={{ width: '100%', my: 1 }} />
            </Box>

            <Box sx={{ mt: 3, mb: 5 }}>
                <ItemGrid display="List" items={items} />
            </Box>

            <Box sx={{ position: 'fixed', bottom: 70, left: 0, bgcolor: 'background.paper', width: '100vw', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button href="/logItem" variant="contained" sx={{ textTransform: 'capitalize', width: '90vw' }}>Create New Clothing Item</Button>
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
        </Box>
    );
};

export { FindItemPage };