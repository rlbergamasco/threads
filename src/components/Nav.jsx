import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsDark } from "appSlice";

const Nav = ({ selected }) => {
    const isDark = useSelector(selectIsDark);
    const icons = ['home', 'history', 'log', 'closet', 'settings'];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            {icons.map((icon, i) => <a key={i} href={`/${icon}`}><img width="30" alt={`${icon} icon`} src={selected === icon ? isDark ? `/icons/${icon}-dark.png` : `/icons/${icon}-light.png` : `/icons/${icon}.png`} /></a>)}
        </Box>
    );
};

Nav.propTypes = {
    selected: PropTypes.oneOf(['home', 'history', 'log', 'closet', 'settings']).isRequired,
};

export { Nav };