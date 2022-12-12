import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Home from '../components/Home';
import App from '../App';
import About from '../components/About';
import Test from '../components/StudentTest';

const router = createBrowserRouter([
    {
      path:"home",
      element:<Home/>
    },
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/test",
      element:<Test/>
    },
  ]);

  export default router;