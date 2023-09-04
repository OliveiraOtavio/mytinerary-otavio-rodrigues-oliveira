import Arrow from "../components/Arrow";
import CardHome from "../components/CardHome";
import { useEffect, useState } from "react";

export default function Carrousel({ data }) {
  const filteredData = data.filter(
    (city) => city._id !== "64e157ac7653f025279ca322"
  );

  let imagesPerView = window.innerWidth <= 768 ? 1 : 4;
  let [counter, setCounter] = useState(0);
  let [counterTo, setCounterTo] = useState(imagesPerView);

  function next_slide() {
    if (filteredData.length <= counterTo) {
      setCounter(0);
      setCounterTo(imagesPerView);
    } else {
      setCounter(counter + imagesPerView);
      setCounterTo(counterTo + imagesPerView);
    }
  }

  function previous_slide() {
    if (counter <= 0) {
      setCounter(filteredData.length - imagesPerView);
      setCounterTo(filteredData.length);
    } else {
      setCounter(counter - imagesPerView);
      setCounterTo(counterTo - imagesPerView);
    }
  }

  useEffect(() => {
    function handleResize() {
      imagesPerView = window.innerWidth <= 768 ? 1 : 4;
      setCounter(0);
      setCounterTo(imagesPerView);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="w-[90vw] h-[18em] mt-[5em] flex justify-center items-center bg-[#0f4387] rounded-[10px]  mx-auto  
                 md:w-[90vw] md:h-max 
                 lg:w-[45vw] lg:h-[70vh] lg:mt-[7em] lg:mr-[3em]
                 2xl:mt-[10em]"
    >
      <div className="text-white w-[40px] h-[40px] stroke-[4px]">
      <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={previous_slide} />
      </div>
      <div
        className="grid grid-cols-1 my-[2em]
                      md:grid-cols-2"
      >
        {filteredData.slice(counter, counterTo).map((each, index) => (
          <CardHome
            key={index}
            src={each.photo}
            alt={each.city}
            text={each.city}
          />
        ))}
      </div>
      <div className="text-white w-[40px] h-[40px] stroke-[4px]">
      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
      </div>
    </div>
  );
}
