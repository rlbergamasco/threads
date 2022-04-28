import { Typography, Box } from '@mui/material';
import { ItemGrid } from 'components';
import { useSelector } from 'react-redux';
import { selectItems } from "appSlice";
import { Search, Tune } from '@mui/icons-material';

const ClosetPage = () => {
    const items = useSelector(selectItems);
    return (
        <Box>
            <Box sx={{ position: 'fixed', width: '100vw', zIndex: 10, top: 0, left: 0, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
                    <Typography variant="h1">Closet</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search fontSize="large" />
                    <Tune fontSize="large" />
                </Box>
            </Box>
            <Box sx={{ mt: 7 }}>
                <ItemGrid items={items} />
            </Box>
        </Box>
    );
};

export { ClosetPage };