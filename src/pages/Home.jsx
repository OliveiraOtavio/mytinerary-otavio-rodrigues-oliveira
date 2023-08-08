import { useState } from "react";
import Carrousel from "../components/Carrousel";

export default function Home() {
  const [show, setShow] = useState(true);

  let data = [
    { id: "am1", city: "Cancun", photo: "/img/america/cancun.jpg" },
    { id: "am2", city: "New York", photo: "/img/america/newyork.jpg" },
    { id: "am3", city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
    { id: "am4", city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
    { id: "as1", city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
    { id: "as2", city: "Pekin", photo: "/img/asia/pekin.jpg" },
    { id: "as3", city: "Singapur", photo: "/img/asia/singapur.jpg" },
    { id: "as4", city: "Tokyo", photo: "/img/asia/tokio.jpg" },
    { id: "eu1", city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
    { id: "eu2", city: "London", photo: "/img/europe/london.jpg" },
    { id: "eu3", city: "Paris", photo: "/img/europe/paris.jpg" },
    { id: "eu4", city: "Roma", photo: "/img/europe/roma.jpg" },
    { id: "oc1", city: "Majuro", photo: "/img/oceania/majuro.jpg" },
    { id: "oc2", city: "Sidney", photo: "/img/oceania/sidney.jpg" },
    { id: "oc3", city: "Suva", photo: "/img/oceania/suva.jpg" },
    { id: "oc4", city: "Wellington", photo: "/img/oceania/wellington.jpg" },
  ];

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
