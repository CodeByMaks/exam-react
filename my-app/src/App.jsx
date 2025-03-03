import './index.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Blog from './components/pages/blog/blog';
import GetById from './components/pages/blog/get-by-id/getById';
import Service from './components/pages/service/service';
import Contact from './components/pages/contact/contact';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:id', element: <GetById /> },
      { path: '/service', element: <Service /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;