import { useState, useEffect, useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";


export default function Cities() {
  const [cities, setCities] = useState([])
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()
  useEffect(
    ()=>{
      axios(apiUrl+'cities?city='+text.current.value)
      //.then(res=> console.log(res.data.response))
      .then(res=> setCities(res.data.response))
      .catch(err=> console.log(err))
    },[reEffect]
  )

  function handleFilter() {
    console.log(text.current.value);
    setReEffect(!reEffect)
  }

    return (
      <>
      <input ref={text} name="text" id="text" onKeyUp={handleFilter} placeholder="Search for a city..." className=" border-2 border-blue-500 my-[3em] flex mx-auto p-[0.5em] rounded" />
      {cities.map(each=> <p key={each._id} className="text-red-500 flex justify-center bg-green-300 "> {each.city}</p>)}
      </>
    )

  // return (
  //   <div className="bg-[#0f4387] w-[95vw] my-[2em] mx-auto flex justify-center p-[2em] rounded">
  //     <img
  //       className="flex justify-center rounded w-[50vw] "
  //       src="/img/page-under-construction-transformed.png"
  //       alt="Page under construction"
  //     />
  //   </div>
  // );
}
