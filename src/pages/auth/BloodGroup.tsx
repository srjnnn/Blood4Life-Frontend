import React, { useState } from 'react';
import Card from '../../components/bloodgroupcard';

const bloodGroups = ['A', 'B', 'AB', 'O'];
const rhFactors = ['+', '-'];

const BloodGroup = () => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedRh, setSelectedRh] = useState('');

  return (
      <div className="flex flex-col items-center">
        <div className="w-full bg-[#C40000] rounded-b-4xl h-20 flex items-center justify-between px-4 text-white">
          <button>&lt;</button>
          <h2 className="text-[18px] font-medium">Pick your Blood Group</h2>
          <div></div>
        </div>
      <div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {bloodGroups.map(group => (
                <Card
                  key={group}
                  type={group}
                  isSelected={selectedGroup === group}
                  onClick={() => setSelectedGroup(group)}
                />
              ))}
            </div>


            <div className="flex gap-4 mt-8">
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
          className="bg-[#C40000] text-white px-16 py-3 font-bold text-xl rounded-lg mt-10 fixed bottom-10"
          onClick={() => {
            if (!selectedGroup || !selectedRh) {
              alert("select both blood group and factor");
              return;
            }
            const bloodType = selectedGroup + selectedRh;
            console.log("Blood Type:", bloodType);
          }}
        >
          Continue
        </button>
      </div>
  );
};

export default BloodGroup;
