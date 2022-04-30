import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { ItemGrid, FilterMenu } from 'components';
import { useSelector } from 'react-redux';
import { selectItems, selectClosetSort, selectClosetDisplay, changeClosetSort, changeClosetDisplay } from "appSlice";
import { Search, Tune } from '@mui/icons-material';

const ClosetPage = () => {
    const items = useSelector(selectItems);
    const [openMenu, setOpenMenu] = useState(false);
    const sort = useSelector(selectClosetSort);
    const display = useSelector(selectClosetDisplay);
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
            <FilterMenu
                open={openMenu}
                setOpen={setOpenMenu}
                sort={sort}
                changeSort={changeClosetSort}
                sortOptions={sortOptions}
                display={display}
                changeDisplay={changeClosetDisplay}
            />
        </Box>
    );
};

export { ClosetPage };