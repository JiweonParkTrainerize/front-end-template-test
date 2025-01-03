import { createBrowserRouter } from 'react-router-dom';
import BookingOutlet from './pages/BookingPage';
import EventListPage from './pages/BookingPage/EventListPage';
import EventPage from './pages/BookingPage/EventPage';
import ResultPage from './pages/BookingPage/ResultPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
    [
        {
            path: 'booking/',
            element: <BookingOutlet />,
            children: [
                // TODO will discuss it more with backend if to use :groupUrl/:profileName or :groupId/:trainerId
                { path: ':groupId/:trainerId', element: <EventListPage /> },
                { path: ':groupId/:trainerId/:eventId', element: <EventPage /> },
                { path: 'result', element: <ResultPage /> },
            ],
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
    ],
    { basename: '/app' },
);

export default router;
