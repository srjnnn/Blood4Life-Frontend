
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const validateForm = () => {
    
    const newErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email";

    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmpassword.trim()) newErrors.confirmpassword = "Confirm Password is required";
    else if (formData.confirmpassword !== formData.password) newErrors.confirmpassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Move to AddDetails page passing signup data
    navigate('/adddetails', { state: { signupData: formData } });
  };

  return (
    <div className="min-h-dvh bg-white flex flex-col items-center">
      <div className="w-full h-[10vh] md:h-[15vh] bg-[#c30000] text-white rounded-b-[30px] flex pt-3 justify-between">
        <button className="w-6 h-6">
          <img src="/left.png" alt="<" />
        </button>
        <h1 className="text-base font-medium">Sign Up</h1>
        <div className="h-1 w-7"></div>
      </div>

      <form onSubmit={handleSubmit} className="w-full md:w-128 flex-1 px-6 mt-6 flex flex-col space-y-4">
        <div>
          <label className="text-sm text-red-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-red-300 rounded-md p-2"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="text-sm text-red-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-red-300 rounded-md p-2"
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
        </div>
        <div>
          <label className="text-sm text-red-700 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            className="w-full border border-red-300 rounded-md p-2"
          />
          {errors.confirmpassword && <p className="text-sm text-red-500">{errors.confirmpassword}</p>}
        </div>

        <button
          type="submit"
          className="bg-[#C40000] text-white px-16 py-3 font-bold text-xl rounded-lg mb-15"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Signup;



