import { useState } from "react";

export default function NavBar() {
  let [show, setShow] = useState(false);

  return (
    <header className="h-[6em] w-[95vw] flex justify-between items-center font-segoe-ui mt-[2em] border-4 border-red-300">
      <div className="flex items-center">
        <img
          className="w-[6em] mr-2"
          src="/img/mytinerary-logo.png"
          alt="My Tinerary Logo"
        />
        <div>
          <h1 className="text-[32px] font-[700]">My Tinerary</h1>
          <p className="text-[16px] text-gray-600 underline underline-offset-[0.5em]">
            Find your perfect trip, design by insiders who know and love their
            cities!
          </p>
        </div>
      </div>
      <div className="w-[30em] flex justify-between items-center font-semibold border-2 border-green-500">
        <a href="">Home</a>
        <a href="">Cities</a>
        <div>
          <button className="bg-[#4F46E5] rounded-[10px] w-min p-2 px-3  text-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mr-2 bg-gray-500 rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Login
          </button>
        </div>
        {/* MENU HAMBURGUESA */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="cursor-pointer w-[30px] h-[30px]"
          onClick={()=>setShow(!show)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {show ? (
          <div className="absolute top-[6.5em] right-[1.6em] flex flex-col border-2 border-blue-500 rounded-[5px] p-[0.5em] bg-gray-800 text-white">
          <p className="mx-1 my-[0.5em] bg-gray-700 p-[0.3em] px-[1em]">Home</p>
          <p className="mx-1 my-[0.5em] bg-gray-700 p-[0.3em] px-[1em]">Cities</p>
          <p className="mx-1 my-[0.5em] bg-gray-700 p-[0.3em] px-[1em]">Login</p>
        </div>
        ) : (null)}
        
      </div>
    </header>
  );
}
