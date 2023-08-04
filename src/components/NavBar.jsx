export default function NavBar() {
  return (
    <header className="h-[64px] w-[1291px] flex justify-between items-center font-segoe-ui mt-[32px]">
        <div className="flex items-center"> 
          <img className="w-[95px] h-[95px] mr-2" src="/img/mytinerary-logo.png" alt="My Tinerary Logo" /> 
          <div>
            <h1 className="text-[32px] font-[700]">My Tinerary</h1>
            <p className="text-[16px] text-gray-600 underline underline-offset-[10px]">Find your perfect trip, design by insiders who know and love their cities!</p> 
          </div>
        </div>
        <div className="w-[354px] flex justify-between items-center font-semibold">
          <a href="">Home</a>
          <a href="">Cities</a>
          <div>
            <button className="bg-[#4F46E5] rounded-[10px] w-[159px] h-[64px] text-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2 bg-gray-500 rounded-full p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Login
            </button> 
          </div>  
          {/* MENU HAMBURGUESA */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-[30px] h-[30px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        
        </div>
      </header>
  )
}
