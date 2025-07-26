import React from 'react';

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    window.location.reload(); // Refresh to re-trigger auth check
  };

  return (
    <div className="text-center mt-10">
      <h1>This is HomePage</h1>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
