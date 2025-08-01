import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signin', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Signin failed');
        return;
      }

      // Save backend returned token (JWT or session token)
      localStorage.setItem('token', data.session.access_token);

      console.log("Logged in");
      navigate('/profile'); 
    } catch (error) {
      alert('Network error: ' + error.message);
    }
  };

  return (
    <div
      className="bg-cover bg-top w-screen h-[90vh] mx-auto font-sans text-white flex flex-col justify-around items-center bg-[url('/signin/background.png')]"
    >
      {/* Header */}
      <div className="text-center pt-[50px]">
        <div className="mb-2">
          <img src="/blood.png" alt="Logo" className="h-[80px] w-[50px] mx-auto" />
        </div>
        <p className="font-medium mt-2">One drop Can Save Life!</p>
        <h2 className="text-white my-2 text-xl font-semibold">Hello! Welcome Back</h2>
        <p className="text-sm">Sign in to your Account</p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSignIn} className="bg-white rounded-[15px] p-[30px] w-80 mb-[200px] text-black">
        <div className="mb-[15px]">
          <label className="flex items-center gap-[10px]">
            📞
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user123@gmail.com"
              required
              className="flex-1 px-3 py-2 rounded-[10px] border border-gray-300 outline-none"
            />
          </label>
        </div>

        <div className="mb-[15px]">
          <label className="flex items-center gap-[10px]">
            🔒
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="flex-1 px-3 py-2 rounded-[10px] border border-gray-300 outline-none"
            />
          </label>
        </div>

        <div className="flex justify-between text-xs mb-[20px]">
          <label className="flex items-center gap-1">
            <input type="checkbox" />
            Remember me
          </label>
          <Link to='/forgetPassword' className="text-gray-500 no-underline">Forget Password?</Link>
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white py-3 rounded-full w-full font-bold hover:bg-red-700 transition"
        >
          Sign in
        </button>
      </form>

      {/* Footer */}
      <div className="mt-5 text-center text-sm text-red-600">
        Don't have an account?{" "}
        <Link to="/signup" className="text-black underline">Sign up!</Link>
      </div>
    </div>
  );
}

export default Signin;


