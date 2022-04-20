import { useEffect } from 'react';
import { Box, createTheme, ThemeProvider, Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Nav } from 'components';
import { HomePage, HistoryPage, ClosetPage, SettingsPage } from 'pages';
import { useSelector } from 'react-redux';
import { selectIsDark } from "appSlice";

const ROUTES = [
  {
    path: '/',
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
    path: '/settings',
    element: <SettingsPage />,
  },
];

const App = () => {
  const isDark = useSelector(selectIsDark);

  let theme = createTheme({
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: {
        main: isDark ? '#6D74BD' : '#3A418C',
      },
      background: {
        default: isDark ? '#303030' : '#fafafa',
      },
      text: {
        primary: isDark ? '#fff' : 'rgba(0, 0, 0, 0.87)',
      },
    },
    typography: {
      fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Source Serif Pro", "Noto Serif", serif',
      },
      h2: {
        fontFamily: '"Source Serif Pro", "Noto Serif", serif',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100vw',
        height: '100vh',
        p: 3,
        bgcolor: 'background.default',
        color: 'text.primary',
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
        <Nav />
      </Box>
    </ThemeProvider>
  );
}

export default App;
