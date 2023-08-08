import Arrow from "../components/Arrow";
import CardHome from "../components/CardHome";
import { useState } from "react";

// export default function Carrousel({ data }) {
//   return (
//     <div className="w-[50vw] flex justify-center items-center bg-gray-800 rounded-[10px] px-[15px] m-[5px]">
//       <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" />
//       <div className="grid grid-cols-2  my-[30px]">
//         {data.slice(6, 10).map((each) => (
//           <CardHome
//             key={each.id}
//             src={each.photo}
//             alt={each.id}
//             text={each.city}
//           />
//         ))}
//       </div>
//       <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" />
//     </div>
//   );
// }

export default function Carrousel({ data }) {

  
  let [counter, setCounter] = useState(0)
  let [counterTo, setCounterTo] = useState(4)
  
  function next_slide() {
    if (data.length <= counterTo) {
      setCounter(0)
      setCounterTo(4)
    } else {
      setCounter(counter+4)
      setCounterTo(counterTo+4)
    }    
  }

  function previous_slide() {
    if (counter <= 0) {
      setCounter(data.length-4)
      setCounterTo(data.length)
    } else {
      setCounter(counter-4)
      setCounterTo(counterTo-4)
    } 
  }

  return (
    <div className="w-max flex justify-center items-center bg-gray-800 rounded-[10px] px-[0.5em] m-[1em]">
      <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={previous_slide} />
      <div className="grid grid-cols-2  my-[2em]">
        {data.slice(counter, counterTo).map((each, index) => (
          <CardHome
            key={index}
            src={each.photo}
            alt={each.id}
            text={each.city}
          />
        ))}
      </div>
      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide}/>
    </div>
  );
}

