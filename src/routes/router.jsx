import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work.jsx';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'about', element: <About /> },
      // { path: 'work', element: <Work /> },
      // { path: 'contact', element: <Contact /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
