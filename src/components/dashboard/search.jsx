export default function Search() {
  return (
        <div className=" w-[60%] h-10 bg-[#fffdfd] rounded-[20px] shadow-md">
          <div className="p-0 h-full">
              <img src="./search.png" alt="" />
              <input
                type="text"
                placeholder="Search By location"
                className="h-full items-center w-full pl-[10%] border-none outline-none bg-transparent text-[#c30000b2] text-sm rounded-[20px]"
              />
          </div>
        </div>
  );
}
