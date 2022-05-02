import { HomePage, HistoryPage, ClosetPage, SettingsPage, LoginPage, LogOutfitPage, SignupPage, StartPage, LogItemPage, FindItemPage, OutfitDetailsPage } from 'pages';

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
    {
        path: '/logItem',
        element: <LogItemPage />,
    },
    {
        path: '/findItem',
        element: <FindItemPage />,
    },
    {
        path: '/:id',
        element:  <OutfitDetailsPage />
    },
];

export { ROUTES };