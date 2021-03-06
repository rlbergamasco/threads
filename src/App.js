import { useEffect } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Nav } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDark, selectSelected, changeSelected } from "appSlice";
import { ROUTES } from 'routes';
import {FindItemPage} from 'pages'

const App = () => {
  const isDark = useSelector(selectIsDark);
  const selected = useSelector(selectSelected);
  const navPaths = ['/home', '/history', '/log', '/closet', '/settings'];
  const location = useLocation().pathname;
  const hideNav = location === '/' || location === '/login' || location === '/signup';
  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: {
        main: isDark ? '#6D74BD' : '#3A418C',
      },
      background: {
        default: isDark ? '#151515' : '#F6F6F6',
        paper: isDark ? '#202020' : '#fff',
      },
      text: {
        primary: isDark ? '#fff' : 'rgba(0, 0, 0, 0.87)',
        disabled: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.38)',
      },
      divider: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
    },
    typography: {
      fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Source Serif Pro", "Noto Serif", serif',
        fontSize: '2em'
      },
      h2: {
        fontWeight: '400',
        fontSize: '1.2em'
      }
    },
  });

  const lightTheme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#3A418C',
      },
      background: {
        default: '#F6F6F6',
        paper: '#fff',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
      },
    },
    typography: {
      fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Source Serif Pro", "Noto Serif", serif',
        fontSize: '2em'
      },
      h2: {
        fontWeight: '400',
        fontSize: '1.2em'
      }
    },
  });

  useEffect(() => {
    if (navPaths.includes(location)) {
      dispatch(changeSelected(location.substring(1)));
    }
  }, [location]);

  return (
    <ThemeProvider theme={hideNav ? lightTheme : theme}>
      <Box sx={{
        p: hideNav ? 0 : 3,
        pb: hideNav ? 0 : 11,
        width: '100vw',
        minHeight: '100vh',
        maxWidth: '500px',
        margin: 'auto',
        bgcolor: 'background.paper',
        color: 'text.primary',
        overflow: 'visible'
      }}>
        <Routes>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              exact={route.path === '/'}
              {...route}
            />
          ))}
        </Routes>
      </Box>
      {hideNav ? null : <Nav selected={selected} />}
    </ThemeProvider >
  );
}

export default App;
