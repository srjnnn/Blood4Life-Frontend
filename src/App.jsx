// App.jsx
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Auth from './pages/Auth';
import SignUp from './pages/auth/signup';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import BloodGroup from './pages/auth/BloodGroup';

import Nav from './components/nav/nav';
import apiRequest from './utils/api';
import { apiRoutes } from './utils/globalConstraints';

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
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
    return <div>Validating...</div>;
  }

  // If not logged in, show only Auth/Signup
  if (!isLoggedin) {
    const publicRoutes = createBrowserRouter([
      {
        path: '/',
        element: <Auth />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '*',
        element: <div className="text-center mt-10 font-bold">404 - Page Not Found</div>,
      },
    ]);
    return <RouterProvider router={publicRoutes} />;
  }

  // After login: protected routes with layout and nav
  const protectedRoutes = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Dashboard />
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
      path: '/bloodgroup',
      element: (
        <Layout>
          <BloodGroup />
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
