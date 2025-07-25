

import React from 'react';

type CardProps = {
  type: string;
  isSelected: boolean;
  onClick: () => void;
};

const Card = ({ type, isSelected, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`h-20 w-20 rounded-xl flex items-center justify-center text-3xl font-bold cursor-pointer transition-all
        ${isSelected ? 'bg-[#C40000] text-white' : 'bg-[#F3E1E1] text-[#F14343]'}`}
    >
      {type}
    </div>
  );
};

export default Card;
