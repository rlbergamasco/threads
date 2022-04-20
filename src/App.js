import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { HomePage, HistoryPage, ClosetPage, SettingsPage } from 'pages';

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
  return (
    <Box sx={{ minHieght: "100vh", width: "100vw" }}>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.path}
            exact={route.path === '/'}
            {...route}
          />
        ))}
      </Routes>
      {/* navbar here */}
    </Box>
  );
}

export default App;
