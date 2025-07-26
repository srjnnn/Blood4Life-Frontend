import React from 'react';

const Card = ({ type, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`h-[10vh] w-[25vw] min-w-[100px] max-w-[150px] rounded-xl flex items-center justify-center text-3xl font-bold cursor-pointer transition-all
        ${isSelected ? 'bg-[#C40000] text-white' : 'bg-[#F3E1E1] text-[#F14343]'}`}
    >
      {type}
    </div>
  );
};

export default Card;
