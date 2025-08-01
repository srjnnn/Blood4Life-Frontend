import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Card from '../../components/bloodGroup/Card';

const bloodGroups = ['A', 'B', 'AB', 'O'];
const rhFactors = ['+', '-'];

const BloodGroup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { signupData, addDetailsData, profileImage } = location.state || {};

  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedRh, setSelectedRh] = useState('');

  const handleContinue = async () => {
    if (!selectedGroup || !selectedRh) {
      alert("Select both blood group and Rh factor");
      return;
    }

    const allData = {
      signup: signupData || {
        email: "demo@example.com",
        password: "password123"
      },
      details: addDetailsData || {
        name: "John Doe",
        gender: "Male",
        mobile: "9876543210",
        age: 30,
        district: "Jhapa",
        municipality: "Birtamode"
      },
      profileImage: profileImage || "", 
      bloodGroup: selectedGroup,
      rhFactor: selectedRh,
      fullBloodType: selectedGroup + selectedRh,
    };

    try {
      const res = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(allData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Registration failed");
        return;
      }

      alert("User registered successfully!");
      navigate('/profile');
    } catch (err) {
      alert("Network error: " + err.message);
    }
  };

  return (
    <div className="min-h-dvh flex flex-col items-center w-screen">
      <div className="w-full h-[7vh] md:h-[15vh] bg-[#c30000] text-white rounded-b-[30px] flex pt-3 justify-between">
        <button className="w-6 h-6">
          <img src="/left.png" alt="<" />
        </button>
        <h2 className="text-base font-medium">Pick your Blood Group</h2>
        <div></div>
      </div>

      <div className='flex w-[80%] flex-col items-center'>
        <h2 className="text-[18px] font-medium mt-8">Select your Blood Type</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {bloodGroups.map(group => (
            <Card
              key={group}
              type={group}
              isSelected={selectedGroup === group}
              onClick={() => setSelectedGroup(group)}
            />
          ))}
        </div>

        <h2 className="text-[18px] font-medium mt-8">Select your Rh Factor</h2>
        <div className="flex gap-4 justify-center mt-2">
          {rhFactors.map(factor => (
            <Card
              key={factor}
              type={factor}
              isSelected={selectedRh === factor}
              onClick={() => setSelectedRh(factor)}
            />
          ))}
        </div>
      </div>

      <button
        className="bg-[#C40000] text-white px-16 py-3 font-bold text-xl rounded-lg mt-auto mb-5"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default BloodGroup;
