import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
import itinerary_actions from "../store/actions/itineraries";
import { Link as Anchor } from "react-router-dom";
import CardItinerary from "../components/CardItinerary";


const { read_city } = city_actions;
const { read_itineraries_from_city } = itinerary_actions;

export default function CityDetail() {
  const { city_id } = useParams();
  const dispatch = useDispatch();

  const cityDetail = useSelector((state) => state.cities.city);
  const itineraries_from_city = useSelector(
    (state) => state.itineraries.itineraries_from_city
  );

  const [showItineraries, setshowItineraries] = useState(false);

  useEffect(() => {
    dispatch(read_city({ id: city_id }));
  }, [dispatch, city_id]);

  const handleViewItineraries = () => {
    dispatch(read_itineraries_from_city({ city_id }));
    setshowItineraries(true);
  };

  return (
    <div className="bg-gray-800 w-full h-full mt-[5em] flex flex-col justify-center 
                    md:mt-[4.5em] md:p-[0.5em] md:px-0 md:h-[70vh]
                    lg:mt-[8em] lg:p-[0.5em] lg:h-max
                    2xl:p-[1em] 2xl:mt-[12em]">
      {!showItineraries && (
        <div className="relative justify-center rounded w-[100vw] h-[100vh] mx-auto 
                        md:w-[100vw] md:h-full md:mb-0
                        lg:w-full lg:h-full ">
          <img
            src={
              cityDetail.photo || "/img/page-under-construction-transformed.png"
            }
            alt="City Image"
            className="w-full h-full object-cover"
          />
          {cityDetail.smalldescription && (
            <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center
                            md:top-[-5em] 
                            lg:left-0 lg:right-0 lg:top-0 lg:bottom-0
                            ">
              <div className="bg-black/75 w-[85vw] h-max flex flex-col items-center justify-center rounded-[0.5em] 
                              md:
                              lg:w-[40vw] lg:h-max  lg:rounded-[1em] 
                              ">
                <p className="text-yellow-500 font-bold text-[2em] text-center
                              md:
                              lg:text-[3em] 
                              ">
                  {cityDetail.city}
                </p>
                <p className="text-yellow-500 font-bold text-[2em] mb-[1.3em] text center
                              md:
                              lg:
                              ">
                  {cityDetail.country}
                </p>
                <p className="text-white  px-[1.3em] py-[1em] mt-[-3em]
                              md: 
                              lg:
                              ">
                  {cityDetail.smalldescription}
                </p>
                <div className="mt-[1em] mb-[1em] md:mt-[1em] md:mb-[1em]">
                  <p
                    className="font-bold cursor-pointer w-[40vw] flex justify-center bg-[#4F46E5] text-center rounded text-white p-[0.5em] py-[0.8em] mx-auto
                               md: 
                               lg:w-[30vw]
                                "
                    onClick={handleViewItineraries}
                  >
                    View Itineraries!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {showItineraries && (
        <div className="flex flex-col bg-center bg-cover bg-no-repeat w-80 h-auto justify-center items-center mx-auto mt-2 
                        md:bg-[url('/img/map-airplane.png')]
                        lg:w-full lg:bg-[url('/img/map-airplane.png')]
                        ">
          {itineraries_from_city.length > 0 ? (
            itineraries_from_city.map((itinerary) => (
              <CardItinerary key={itinerary._id} itinerary={itinerary} />
            ))
          ) : (
            <>
              <p className="text-[20px] text-white font-bold my-[1em] 
                            md:text-[26px] md:my-[1em] 
                            lg:text-[32px]">
                There are no itineraries yet!
              </p>
              <img
                className="w-[60vw] mb-[2em] 
                            md:w-[40vw] md:mb-[2em] 
                            lg:w-[45vw]"
                src="/img/no-itineraries.jpg"
                alt="No itineraries image"
              />
            </>
          )}

          <div className="flex justify-between gap-[4em] mt-[0.2em] mb-[1em] 
                          md:mt-[0.5em] md:mb-[1em] ">
            <button
              onClick={() => setshowItineraries(false)}
              className="font-bold w-[40vw]  bg-[#4F46E5] text-center  rounded text-white p-[0.5em] py-[0.8em]
                          md:
                          lg:w-[20vw]
                          "
                        >
              Back to {cityDetail.city} details!
            </button>
            <Anchor
              to={"/cities"}
              className="font-bold w-[40vw]  bg-[#4F46E5] text-center flex justify-center items-center rounded text-white p-[0.5em] py-[0.1em]
                         md:
                         lg:w-[20vw]
                          "
            >
              Back to cities!
            </Anchor>
          </div>
        </div>
      )}
    </div>
  );
}
