import React, { useState } from 'react';

const SortFilter = () => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const handleSortSelect = (value) => {
    console.log("Sort by:", value);
    setShowSortDropdown(false); // optional: close dropdown after selection
  };

  const handleFilterSelect = (value) => {
    console.log("Filter by:", value);
    setShowFilterDropdown(false); // optional: close dropdown after selection
  };

  return (
    <div className="mt-[16vh] flex justify-center mb-3 gap-[20%] w-screen">
      {/* Sort Button */}
      <div>
        <button 
          onClick={() => setShowSortDropdown(prev => !prev)}
          className="flex items-center gap-2 h-[45px] w-[153px] rounded-[20px] border border-[#0000001a] bg-white text-[#c30000b2] font-light text-base px-4"
        >
          <img src="./home/sort.png" alt="" /> 
          Sort 
          <span className="ml-auto">
            <img src="./downArrow.png" alt="" />
          </span>
        </button>
        
        {/* Sort Dropdown */}
        {showSortDropdown && (
          <div className="absolute mt-2 w-full bg-white border rounded shadow-md z-10">
            <div
              onClick={() => handleSortSelect("Location")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Location</div>
          </div>
        )}
      </div>

      {/* Filter Button */}
      <div >
        <button 
          onClick={() => setShowFilterDropdown(prev => !prev)}
          className="flex items-center gap-2 h-[45px] w-[149px] rounded-[20px] border border-[#0000001a] bg-white text-[#c30000b2] font-light text-base px-4"
        >
          <img src="./home/filter.png" alt="" /> 
          Filter 
          <span className="ml-auto">
            <img src="./downArrow.png" alt="" />
          </span>
        </button>
        
        {/* Filter Dropdown */}
        {showFilterDropdown && (
          <div className="absolute mt-2 w-full bg-white border rounded shadow-md z-10">
            <div
              onClick={() => handleFilterSelect("Blood Group")} 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blood Group</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortFilter;
