import { useEffect } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Nav } from 'components';
import { HomePage, HistoryPage, ClosetPage, SettingsPage, LoginPage, LogOutfitPage, SignupPage, StartPage } from 'pages';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDark, selectSelected, changeSelected } from "appSlice";

const ROUTES = [
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/history',
    element: <HistoryPage />,
  },
  {
    path: '/closet',
    element: <ClosetPage />,
  },
  {
    path: '/log',
    element: <LogOutfitPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
];

const App = () => {
  const isDark = useSelector(selectIsDark);
  const selected = useSelector(selectSelected);
  const navPaths = ['/home', '/history', '/log', '/closet', '/settings'];
  const location = useLocation().pathname;
  const hideNav = location === '/' || location === '/login' || location === '/signup';
  const dispatch = useDispatch();

  let theme = createTheme({
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: {
        main: isDark ? '#6D74BD' : '#3A418C',
      },
      background: {
        default: isDark ? '#202020' : '#F6F6F6',
        paper: isDark ? '#151515' : '#fff',
      },
      text: {
        primary: isDark ? '#fff' : 'rgba(0, 0, 0, 0.87)',
      },
    },
    typography: {
      fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Source Serif Pro", "Noto Serif", serif',
        fontSize: '2.1em'
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
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}>
        <Box sx={{ p: 3 }}>
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
      </Box>
    </ThemeProvider>
  );
}

export default App;
