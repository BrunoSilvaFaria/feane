import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/",
        element: <Home />,
      },
      { 
        path: "/menu",
        element: <Menu />,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
