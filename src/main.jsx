import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Hom/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import Orders from './components/Orders/Orders';
import PrivateRouts from './components/Routes/PrivateRouts';
import Dashboard from './components/Dashboaard/Dashboard';
import PementHistory from './components/Pemen/PementHistory';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/orders",
        element: <PrivateRouts>
          <Orders></Orders>
        </PrivateRouts>
      },
      {
        path: "/dashboard",
        element: <PrivateRouts>
          <Dashboard></Dashboard>
        </PrivateRouts>
      },
      {
        path: "/pementHistory",
        element: <PrivateRouts>
          <PementHistory></PementHistory>
        </PrivateRouts>
      }

    ]
  },
]);







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)



