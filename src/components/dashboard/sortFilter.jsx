import React from 'react'

const SortFilter = () => {
  return (
        <div className="mt-[16vh] flex justify-center mb-3 gap-[20%] w-screen">
      {/* Sort Button */}
      <div className="">
        <button className="flex items-center gap-2 h-[45px] w-[153px] rounded-[20px] border border-[#0000001a] bg-white text-[#c30000b2] font-light text-base px-4">
          <img src="./home/sort.png" alt="" /> Sort <span className="ml-auto"><img src="./downArrow.png" alt="" /></span>
        </button>
        {/* Sort Dropdown */}
        <div className="absolute mt-2 w-full bg-white border rounded shadow-md hidden group-hover:block">
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Newest first</div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Oldest first</div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Alphabetical</div>
        </div>
      </div>

      {/* Filter Button */}
      <div className="">
        <button className="flex items-center gap-2 h-[45px] w-[149px] rounded-[20px] border border-[#0000001a] bg-white text-[#c30000b2] font-light text-base px-4">
          <img src="./home/filter.png" alt="" /> Filter <span className="ml-auto"><img src="./downArrow.png" alt="" /></span>
        </button>
        {/* Filter Dropdown */}
        <div className="absolute mt-2 w-full bg-white border rounded shadow-md hidden group-hover:block">
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All items</div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 1</div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 2</div>
        </div>
      </div>
    </div>
  )
}

export default SortFilter