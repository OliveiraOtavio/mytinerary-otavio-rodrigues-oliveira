import { useState, useEffect } from "react";
import Carrousel from "../components/Carrousel";
import axios from "axios";


export default function Home() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);


  useEffect( 
    ()=>{
      axios('/data.json')
        .then(res=> setData(res.data))
        .catch(err=> console.log(err))
    },
    []
  )

  return (
    <main className="flex items-top flex-col sm:flex-row w-[95vw] mt-20 border-2 border-blue-500 ">
      {/* SIDE TEXT */}
      <div className="w-[40vw] flex-1 my-auto ">
        <h2 className="font-[700] text-[40px]">Find the perfect destination</h2>
        <p className="w-[40vw] mb-[1em] mt-3  text-[#1C1C1C] text-[15px]">
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </p>

        {/* VIEW MORE BUTTON */}
        <button className="flex items-center justify-center bg-[#4F46E5] w-[15rem] h-[3rem] rounded-[8px] text-white ">
          View More
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
        </button>
      </div>

      {/* CARROUSEL */}       
      {/* ELIMINAR BOTON SHOW/HIDE */}
      {show ? (
        <input
          onClick={() => setShow(!show)}
          type="button"
          value="Hide"
          className="h-max my-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        />
      ) : (
        <input
          onClick={() => setShow(!show)}
          type="button"
          value="Show"
          className="h-max my-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        />
      )}

      {show ? <Carrousel data={data} /> : <h1 className="flex items-center my-auto mx-5 bg-blue-300 h-max p-3 rounded-[5px]"> Click to see cards! </h1>}
      {/* <Carrousel data={data} /> */} 

    </main>
  );
}
