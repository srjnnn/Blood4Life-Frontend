import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Auth from './pages/Auth';
import BloodGroup from './pages/BloodGroup';
import SignUp from './pages/Signup';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Nav from './components/nav/nav';

// Layout wrapper component
const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: '/auth',
    element: (
      <Layout>
        <Auth />
      </Layout>
    ),
  },
  {
    path: '/signup',
    element: (
      <Layout>
        <SignUp />
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
    path: '/profile',
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <div className="text-center text-xl font-bold mt-10">404 - Page Not Found</div>
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
