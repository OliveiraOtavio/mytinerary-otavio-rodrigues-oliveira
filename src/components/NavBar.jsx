import { useState, useRef, useEffect } from "react";
import { Link as Anchor } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";

const { signout } = user_actions;
const { read_user } = user_actions;

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

  let mail = useSelector((store) => store.users.user?.mail); //aca busco el mail del usuario loggeado
  //console.log(mail)
  let photo = useSelector((store) => store.users.user?.photo);
  //console.log(photo);
  let name = useSelector((store) => store.users.user?.name);
  let lastName = useSelector((store) => store.users.user?.lastName);
  let dispatch = useDispatch();

  useOutsideClick(menuRef, () => {
    if (show) setShow(false);
  });

  return (
    <header className="  h-[6em] w-[95vw] flex justify-between items-center font-segoe-ui mt-[2em] z-10  ">
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
        className="flex justify-around items-center font-semibold  
                   md:w-[20em] 
                   lg:w-[30em] 
        "
      >
        <p className="hidden text-red-400 font-bold">{mail}</p>
        <div className="flex flex-col  items-center 
                        md:w-[6em] md:flex-row
                        lg:w-[10em] lg:flex lg:justify-start lg:pl-[5em]">
          <img
            src={photo}
            alt={mail}
            className="w-[5em] rounded-full mt-[3.5em] ml-[3em]
                      md:mb-[2em] md:mr-[-8em] md:mt-[2.5em] md:ml-[1em]
                      lg:w-[6em] lg:mt-[2.5em] lg:ml-2"
          />
          <p className="text-yellow-500 font-bold ml-[4em]
                        md:mt-[6em] md:mr-[6em] md:ml-[3.6em] md:text-center
                        lg:ml-[3.5em] lg:text-center lg:mt-[7em]">
            {name} {lastName}
          </p>
        </div>

        <Anchor to="/" className="hidden md:flex ">
          {" "}
          Home{" "}
        </Anchor>
        <Anchor to="/cities" className="hidden md:flex">
          {" "}
          Cities{" "}
        </Anchor>
        <div>
          {/* LOGIN BUTTON */}
          {!mail && (
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
          )}

          {/* LOGOUT BUTTON */}

          {mail && (
            <span
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You are leaving your account!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, Log out!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    dispatch(signout());
                    Swal.fire(
                      "Logged Out!",
                      "You have successfully logged out.",
                      "success"
                    );
                  }
                });
              }}
              className="cursor-pointer hidden bg-red-700 rounded-[10px] w-min  p-2 px-3  text-white flex items-center justify-center
    sm:hidden
    md:flex "
            >
              Logout
            </span>
          )}
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

            {!mail && (
              <Anchor
                to="/login"
                className="mx-1 my-[0.5em] bg-blue-700 rounded p-[0.3em] px-[1em]"
                onClick={() => setShow(false)}
              >
                Login
              </Anchor>
            )}

            {mail && (
              <span
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You are leaving your account!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Log out!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      dispatch(signout());
                      Swal.fire(
                        "Logged Out!",
                        "You have successfully logged out.",
                        "success"
                      );
                      setShow(false);
                    }
                  });
                }}
                className="cursor-pointer mx-1 my-[0.5em] bg-red-700 rounded p-[0.3em] px-[1em]"
              >
                Logout
              </span>
            )}
          </div>
        ) : null}
      </div>
    </header>
  );
}
