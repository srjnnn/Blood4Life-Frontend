
import CardList from '../../components/dashboard/CardList'
import SearchBox from '../../components/dashboard/search';
import SortFilter from '../../components/dashboard/sortFilter';
import Nav from '../../components/nav/nav';

export default function Home() {
  return (
    <div className="w-full max-h-vh flex flex-col items-center relative">
    <div className="w-full fixed h-[13vh] md:h-[15vh] bg-[#c30000] text-white  rounded-b-[30px] ">
          <div className='flex mb-3 pt-3 justify-between'>
            <button className="w-6 h-6">
              <img src="/left.png" alt="<" />
            </button>
            <h2 className="text-base font-medium">Home</h2>
            <div></div>
          </div>
          <div className='w-screen flex items-center justify-center max-w-[413px] h-12'>
            <SearchBox/>
          </div>
                    
        </div>
    <SortFilter/>
    <div className="w-screen gap-2  scroll-auto rounded-[10px] flex flex-col items-center shadow">
      <CardList/>       
    </div>
      <Nav/>
    </div>
  );
}
