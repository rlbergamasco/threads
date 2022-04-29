import { Box, Typography, Drawer, Button, Avatar, Divider } from '@mui/material';
import { Close, GridView, ViewList } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

const FilterDrawer = ({ open, setOpen, sort, changeSort, sortOptions, display, changeDisplay }) => {
    const dispatch = useDispatch();
    const displayOptions = {
        Grid: <GridView fontSize='large' />,
        List: <ViewList fontSize='large' />
    }

    return (
        <Drawer open={open} onClose={() => setOpen(false)} anchor='right'>
            <Box sx={{ width: '100vw', p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Typography variant="h2">Display Options</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Close fontSize='large' onClick={() => setOpen(false)} />
                </Box>
                <Box sx={{ display: 'flex', pb: 1 }}>
                    {Object.keys(displayOptions).map((option, i) =>
                        <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pr: 2, py: 1 }}>
                            <Avatar
                                onClick={() => dispatch(changeDisplay(option))}
                                sx={{
                                    backgroundColor: option === display ? 'primary.main' : 'background.paper',
                                    border: '2px solid',
                                    borderColor: 'primary.main',
                                    color: option === display ? 'background.paper' : 'primary.main',
                                    width: 54,
                                    height: 54
                                }}>
                                {displayOptions[option]}
                            </Avatar>
                            <Typography>{option}</Typography>
                        </Box>
                    )}
                </Box>
                <Divider />
                <Box sx={{ py: 2 }}>
                    <Typography variant="h2">Sort by</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        {sortOptions.map((option, i) =>
                            <Button key={i} variant={option === sort ? 'contained' : 'outlined'} onClick={() => dispatch(changeSort(option))} sx={{ mt: 1 }}>
                                <Typography sx={{ textTransform: 'capitalize' }}>
                                    {option}
                                </Typography>
                            </Button>
                        )}
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ py: 2 }}>
                    <Typography variant="h2">Filter</Typography>
                </Box>
            </Box>
        </Drawer>
    );
};

export { FilterDrawer };