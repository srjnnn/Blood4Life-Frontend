import React from 'react'

const Card = ({ img, name, address, bloodGroup }) => {
  return (
    <>
        <div className="w-[90vw] md:w-90 md:h-[18vh]  h-[18vh] bg-[#fdf7f7] rounded-[10px] p-3 shadow border border-gray-200 flex flex-col justify-between">
      
      {/* Top Row: Avatar + Info + Blood Group */}
      <div className="flex justify-between items-start">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-[70px] h-[70px] rounded-[10px] bg-[#d9d9d9] flex items-center justify-center text-sm font-medium">
            {img}
          </div>
        </div>

        {/* Info */}
        <div className="w-[70%] flex flex-col ml-4 justify-start">
          <h3 className="font-bold text-[#200505] text-sm">{name}</h3>
          <p className="font-medium text-[#c3000080] text-xs">
            {address}
          </p>
          <p className="font-medium text-[#c3000080] text-xs">
            Jhapa, Nepal
          </p>
        </div>

        {/* Blood Group */}
        <div className='flex flex-col h-full justify-between'>
            <div className="flex items-center text-base font-medium text-[#520e0e] ml-auto">
                {bloodGroup}
            </div>
            <div className="flex justify-end gap-3">
                <button className="h-5 w-5 p-0">
                    <img src="./message.png" alt="" />
                </button>
                <button className="h-4 w-4 p-0">
                    <img src="./phone.png" alt="" />
                </button>
            </div>
        </div>
      </div>
      

      {/* Bottom Row: Buttons */}
      <div className="flex gap-5 justify-center items-center mt-2">
        <button className="h-7 w-fit rounded-2xl px-3.5 bg-[#fff8f8] border border-[#0000001a] hover:bg-[#fff0f0] text-sm text-[#c30000b2] font-medium">
          View details
        </button>
        <button className="h-7 w-fit rounded-2xl px-3.5 bg-[#fff8f8] border border-[#0000001a] hover:bg-[#fff0f0] text-sm text-[#c30000b2] font-medium">
          Request For Donation
        </button>
      </div>
    </div>
    </>
  )
}

export default Card
