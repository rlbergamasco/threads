import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsDark } from "appSlice";

const Nav = ({ selected }) => {
    const isDark = useSelector(selectIsDark);
    const icons = ['home', 'history', 'log', 'closet', 'settings'];

    return (
        <Box sx={{ bgcolor: 'background.default', p: 3, position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            {icons.map((icon, i) =>
                <Box key={i} sx={{ filter: selected !== icon && isDark ? 'invert(100%) sepia(8%) saturate(1386%) hue-rotate(356deg) brightness(113%) contrast(107%)' : selected === icon && isDark ? 'brightness(0) saturate(100%) invert(65%) sepia(77%) saturate(3041%) hue-rotate(205deg) brightness(78%) contrast(85%)' : '' }}>
                    <a href={`/${icon}`}><img width="28" alt={`${icon} icon`} src={selected === icon ? `/icons/${icon}-fill.png` : `/icons/${icon}.png`} /></a>
                </Box>
            )}
        </Box>
    );
};

Nav.propTypes = {
    selected: PropTypes.oneOf(['home', 'history', 'log', 'closet', 'settings']).isRequired,
};

export { Nav };