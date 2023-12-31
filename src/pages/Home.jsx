import { useState, useEffect } from "react";
import Carrousel from "../components/Carrousel";
//import axios from "axios";
import { Link as Anchor } from "react-router-dom";
//import apiUrl from "../apiUrl";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";

const { read_carousel } = city_actions

export default function Home() {
 
  const carousel = useSelector(store => store.cities.carousel);
  
  const dispatch = useDispatch()

  useEffect(() => {
    // axios("/data.json") aca trae la data del data.json
    if (carousel.length === 0) {
      dispatch( read_carousel() )
    }    
  }, []);
 

  return (
    <main
      className="flex-col items-center w-[95vw] my-[1.5em] mx-auto 
                 sm:flex-row                     
                 lg:flex lg:my-[1em] lg:h-max"
    >
      {/* SIDE TEXT */}
      <div className="w-[40vw] flex-1 my-auto  ">
        <h2
          className="flex justify-center w-[95vw] text-[28px] font-bold mt-[3em]                      
                     md:mt-[3.5em]  
                     lg:w-max lg:ml-0 lg:font-[700] lg:text-[40px] lg:justify-start "
        >
          Find the perfect destination
        </h2>
        <p
          className="w-[95vw] text-center px-[1em] text-[#1C1C1C] mt-[0.5em] mb-[1em] text-[15px] 
                                         
                     lg:w-[40vw] lg:text-start"
        >
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </p>

        {/* VIEW MORE BUTTON */}
        <Anchor
          to="/cities"
          className="flex items-center justify-center  w-[80vw] ml-[1.8em] mb-[-2em] h-[3rem] bg-[#4F46E5] rounded-[8px] text-white                                        
                     md:w-max md:px-[2em] md:mx-auto md:ml-[16em] md:mb-[-3em] 
                     lg:w-[15em] lg:ml-0 lg:px-0 "
        >
          Find the city for you!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" rotate-[-30deg] ml-2  w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </Anchor>
      </div>
      {/* CARROUSEL */}
      <Carrousel data={carousel} />
    </main>
  );
}
