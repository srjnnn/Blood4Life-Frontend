import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    age: 18,
    district: 'Jhapa',
    municipality: '',
    image: null
  });

  const municipalities = [
    "Birtamode", "Damak", "Mechinagar", "Arjundhara", "Kankai",
    "Gauradaha", "Gaurigunj", "Barhadashi", "Buddhashanti",
    "Haldibari", "Jhapa", "Kamal"
  ];

  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
      setFormData({ ...formData, image: file });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email";

    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile must be 10 digits";

    if (!formData.age) newErrors.age = "Age is required";
    else if (formData.age <= 0 || formData.age > 120) newErrors.age = "Age must be between 1 and 120";

    if (!formData.district) newErrors.district = "District is required";
    if (!formData.municipality) newErrors.municipality = "Municipality is required";

    if (!formData.image) newErrors.image = "Profile image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      console.log('Profile Image URL (preview):', profileImage);
    }
  };

  return (
    <div className="min-h-dvh bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full h-[10vh] md:h-[15vh] bg-[#c30000] text-white rounded-b-[30px] flex pt-3 justify-between px-4 items-center">
        <button className="w-6 h-6">
          <img src="/left.png" alt="<" />
        </button>
        <h1 className="text-base font-medium">Sign Up</h1>
        <div className="h-1 w-7" />
      </div>

      {/* Profile Image Upload */}
      <div className="relative mt-[-40px] md:mt-[-80px]">
        <img
          src={profileImage || "/default-profile.png"}
          alt="Profile"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white object-cover mt-4"
        />
        <label
          htmlFor="imageUpload"
          className="absolute bottom-0 right-0 bg-red-600 p-1 rounded-full cursor-pointer"
          aria-label="Upload profile image"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M4 5a2 2 0 012-2h2l1-1h2l1 1h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm6 2a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      {errors.image && <p className="text-sm text-red-500 text-center">{errors.image}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full md:w-128 px-6 mt-6 flex flex-col space-y-4">
        {/* Name */}
        <div>
          <label className="text-sm text-red-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-red-300 rounded-md p-2"
            required
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-red-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-red-300 rounded-md p-2"
            required
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label className="text-sm text-red-700 font-medium">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border border-red-300 rounded-md p-2"
            required
          />
          {errors.mobile && <p className="text-sm text-red-500">{errors.mobile}</p>}
        </div>

        {/* Age */}
        <div>
          <label className="text-sm text-red-700 font-medium">Age</label>
          <input
            type="number"
            name="age"
            min="18"
            max="65"
            value={formData.age}
            onChange={handleChange}
            className="w-full border border-red-300 rounded-md p-2"
            required
          />
          {errors.age && <p className="text-sm text-red-500">{errors.age}</p>}
        </div>

        {/* District (static display) */}
        <div>
          <label className="text-sm text-red-700 font-medium">District</label>
          <p className="border border-red-300 rounded-md p-2 bg-gray-100">Jhapa</p>
        </div>

        {/* Municipality */}
        <div>
          <label className="text-sm text-red-700 font-medium">Municipality</label>
          <select
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            className="w-full border border-red-300 rounded-md p-2"
            required
          >
            <option value="">Select Municipality</option>
            {municipalities.map((muni) => (
              <option key={muni} value={muni}>
                {muni}
              </option>
            ))}
          </select>
          {errors.municipality && (
            <p className="text-sm text-red-500">{errors.municipality}</p>
          )}
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-600 text-center mt-auto">
          By continuing, you agree to our{" "}
          <span className="text-red-600 underline cursor-pointer">Privacy Policy</span> and{" "}
          <span className="text-red-600 underline cursor-pointer">Terms of Use</span>.
        </p>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#C40000] text-white px-16 py-3 font-bold text-xl rounded-lg mb-6"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignUp;
