import { Typography, Box } from '@mui/material';
import { ItemGrid } from 'components';
import { useSelector } from 'react-redux';
import { selectItems } from "appSlice";

const ClosetPage = () => {
    const items = useSelector(selectItems);
    return (
        <Box>
            <Typography variant="h1" sx={{ marginBottom: '.5em' }}>Closet</Typography>
            <ItemGrid items={items} />
        </Box>
    );
};

export { ClosetPage };