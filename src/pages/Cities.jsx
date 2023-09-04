import { useState, useEffect, useRef } from "react";
import CardCity from "../components/CardCity";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";

const { read_cities } = city_actions;

export default function Cities() {
  //const [cities, setCities] = useState([]); //variable local
  const cities = useSelector(store => store.cities.cities);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch();
  //console.log(cities);

  useEffect(() => {
    dispatch(read_cities({ text: text.current?.value}));
  }, [reEffect]);

  function handleFilter() {
    //console.log(text.current.value);
    setReEffect(!reEffect);
  }

  return (
    <>
      {/* SEARCH BAR */}
      <div className="relative w-max  mx-auto">
        <input
          ref={text}
          name="text"
          id="text"
          onKeyUp={handleFilter}
          placeholder="Search for a city..."
          className="w-[75vw] border-2 border-blue-500 mt-[-2em] mb-[4em] flex mx-auto p-[0.5em] pl-10 rounded-md
                       md:mt-[-1.5em]
                       lg:w-[55vh] lg:my-[3em] lg:mx-auto lg:p-[0.5em] lg:pl-10
                       2xl:mt-[6em] 2xl:mb-[3em] "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div
        className="mt-[-2em] pt-2
                        lg:mt-[1em]"
      >
        <div className="cards-container flex flex-wrap justify-between">
          {cities.map((each) => (
            <CardCity
              key={each._id}
              src={each.photo}
              alt={each._id}
              text={each.city}
              id={each._id}
              country={each.country}
            />
          ))}
        </div>
      </div>
    </>
  );
}
