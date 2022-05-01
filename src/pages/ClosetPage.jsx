import { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { ItemGrid, FilterMenu } from 'components';
import { useSelector } from 'react-redux';
import { selectItems } from "appSlice";
import { selectSort, selectDisplay, changeSort, changeDisplay, selectSelectedTags, changeSelectedTags } from "closetSlice";
import { Search, Tune, Add } from '@mui/icons-material';

const ClosetPage = () => {
    const items = useSelector(selectItems);
    const [openMenu, setOpenMenu] = useState(false);
    const sort = useSelector(selectSort);
    const display = useSelector(selectDisplay);
    const sortOptions = ['Alphabetical', 'Most Recently Worn', 'Least Recently Worn', 'Most Worn', 'Least Worn', 'Date Added: Most Recent', 'Date Added: Least Recent'];

    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Closet</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" />
                    <Tune fontSize="large" onClick={() => setOpenMenu(true)} />
                </Box>
            </Box>

            <Box sx={{ mt: 7 }}>
                <ItemGrid items={items} />
            </Box>

            <Box sx={{ mt: 5 }}>
                <Button href="/logItem" variant="contained" sx={{ textTransform: 'capitalize', width: "100%"}}><Add fontSize="small" />Add New Item</Button>
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

export { ClosetPage };