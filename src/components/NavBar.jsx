import { useState, useRef, useEffect } from "react";
import { Link as Anchor } from "react-router-dom";

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default function NavBar() {
  let [show, setShow] = useState(false);
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    if (show) setShow(false);
  });

  return (
    <header className="h-[6em] w-[95vw] flex justify-between items-center font-segoe-ui mt-[2em] z-10  ">
      <div
        className="flex items-center 
                      md:mt-[2em]"
      >
        <img
          className="w-[6em] bg-white/90 rounded-full
                     md:w-[6em] md:mr-2
                     lg:w-[8em]"
          src="/img/mytinerary-logo.png"
          alt="My Tinerary Logo"
        />
        <div>
          <h1
            className="text-[2em] w-[50vw] font-[700]                         
                         md:text-[32px] md:flex 
                         lg:flex"
          >
            My Tinerary
          </h1>
          <p
            className=" w-[60vw] hidden underline underline-offset-[0.5em] text-[#0f4387] font-semibold
                         md:text-[16px] md:flex md:no-underline md:w-[20em] 
                         lg:flex lg:w-[50vw] lg:underline lg:underline-offset-[0.5em] lg:text-[18px]"
          >
            Find your perfect trip, design by insiders who know and love their
            cities!
          </p>
        </div>
      </div>
      <div
        className="flex justify-between items-center font-semibold 
                   md:w-[20em] 
                   lg:w-[20em] 
        "
      >
        <Anchor to="/" className="hidden md:flex ">
          {" "}
          Home{" "}
        </Anchor>
        <Anchor to="/cities" className="hidden md:flex">
          {" "}
          Cities{" "}
        </Anchor>
        <div>
          <Anchor
            to="/login"
            className="hidden bg-[#4F46E5] rounded-[10px] w-min p-2 px-3  text-white flex items-center justify-center
            sm:hidden
            md:flex "
          >
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
          </Anchor>
        </div>
        {/* HAMBURGER MENU */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" cursor-pointer w-[3em] h-[3em] mr-[0.5em] bg-[#0f4387] text-white rounded  p-[2px] 
                      md:hidden"
          onClick={() => setShow(!show)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {show ? (
          <div
            ref={menuRef}
            className="absolute top-[6.8em] right-[1.2em] flex flex-col  rounded p-[0.5em] bg-gray-800 text-white bg-gray-700 "
          >
            <Anchor
              to="/"
              className="mx-1 my-[0.5em] bg-blue-700 rounded p-[0.3em] px-[1em]"
              onClick={() => setShow(false)}
            >
              Home
            </Anchor>
            <Anchor
              to="/cities"
              className="mx-1 my-[0.5em] bg-blue-700 rounded p-[0.3em] px-[1em]"
              onClick={() => setShow(false)}
            >
              Cities
            </Anchor>
            <Anchor
              to="/login"
              className="mx-1 my-[0.5em] bg-blue-700 rounded p-[0.3em] px-[1em]"
              onClick={() => setShow(false)}
            >
              Login
            </Anchor>
          </div>
        ) : null}
      </div>
    </header>
  );
}
