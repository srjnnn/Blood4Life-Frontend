// App.jsx
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';

import Nav from './components/nav/nav';

import Auth from './pages/auth/authHome';
import Signin from './pages/auth/SignIn';
import Signup from './pages/auth/signup';
import AddDetails from './pages/auth/addDetails';
import BloodGroup from './pages/auth/BloodGroup';
import ForgetPassword from './pages/auth/forgetPassword';

import Home from './pages/mainPages/homePage';
import Profile from './pages/mainPages/profile';
import Event from './pages/mainPages/Event';
import Donate from './pages/mainPages/donate';
import Request from './pages/mainPages/Request';

import apiRequest from './utils/api';
import { apiRoutes } from './utils/globalConstraints';

const Layout = ({ children }) => (
  <>
    {children}
    <Nav />
  </>
);

function App() {
  const [isLoggedin, setIsLoggedin] = useState(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const authToken = localStorage.getItem('token');
      if (!authToken) {
        setIsLoggedin(false);
        return;
      }
      const response = await apiRequest(apiRoutes.auth.validate, 'POST', { token: authToken });
      setIsLoggedin(!!response);
    };
    checkAuthStatus();
  }, []);

  if (isLoggedin === null) {
    return (
      <div className="h-screen flex items-center justify-center text-lg font-medium">
        Validating session...
      </div>
    );
  }

  if (!isLoggedin) {
    // Public (unauthenticated) routes
    const publicRoutes = createBrowserRouter([
      { path: '/', element: <Auth /> },
      { path: '/signup', element: <Signup /> },
      { path: '/signin', element: <Signin /> },
      { path: '/adddetails', element: <AddDetails /> },
      { path: '/bloodgroup', element: <BloodGroup /> },
      { path: '/forgetPassword', element: <ForgetPassword /> },

      // Redirect protected routes to signin
      { path: '/profile', element: <Navigate to="/signin" replace /> },
      { path: '/request', element: <Navigate to="/signin" replace /> },
      { path: '/donate', element: <Navigate to="/signin" replace /> },
      { path: '/event', element: <Navigate to="/signin" replace /> },

      { path: '*', element: <div className="text-center mt-10 font-bold">404 - Page Not Found</div> },
    ]);

    return <RouterProvider router={publicRoutes} />;
  }

  // Protected routes (authenticated users)
  const protectedRoutes = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: '/profile',
      element: (
        <Layout>
          <Profile />
        </Layout>
      ),
    },
    {
      path: '/request',
      element: (
        <Layout>
          <Request />
        </Layout>
      ),
    },
    {
      path: '/donate',
      element: (
        <Layout>
          <Donate />
        </Layout>
      ),
    },
    {
      path: '/event',
      element: (
        <Layout>
          <Event />
        </Layout>
      ),
    },
    {
      path: '*',
      element: (
        <Layout>
          <div className="text-center mt-10 font-bold">404 - Page Not Found</div>
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={protectedRoutes} />;
}

export default App;
