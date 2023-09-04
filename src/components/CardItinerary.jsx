import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MoneyIcon from "../components/MoneyIcon";
import LikeButton from "./LikeButton";
import Arrow from "./Arrow";
import user_actions from "../store/actions/users";
import city_actions from "../store/actions/cities";

const { read_single_user } = user_actions;
const { read_city } = city_actions;

function CardItinerary({ itinerary }) {
  const dispatch = useDispatch();
  const singleUser = useSelector((store) => store.users.singleUser);

  useEffect(() => {
    const cityAdminId = itinerary.city_id.admin_id._id;
    dispatch(read_single_user(cityAdminId));
  }, [dispatch, itinerary]);

  const calculateMoneyIcons = (price) => {
    if (price <= 50) return 1;
    if (price <= 100) return 2;
    if (price <= 150) return 3;
    if (price <= 200) return 4;
    if (price > 250) return 5;
    return 0;
  };

  const numberOfIcons = calculateMoneyIcons(itinerary.price);
  const [show, setShow] = useState(false);

  return (
    <div className="w-[95vw] h-max px-[1em] mb-[50px] bg-white flex justify-center  rounded
                    md:  md:h-max
                    lg:w-[45vw] lg:px-[1em] lg:m-[20px] lg:h-max
                    ">
      <div key={itinerary._id}>
        <p className="text-center font-bold text-[1.5em] my-[0.5em]">
          {itinerary.name}
        </p>
        <img
          src={
            itinerary.photo || "/img/page-under-construction-transformed.png"
          }
          alt="Itinerary Image"
          className="w-[85vw] h-auto mb-[1em] object-cover rounded mx-auto
                    md: md:h-[30vh]
                    lg:w-[75vw] lg:h-[70vh] lg:mb-[1em]
                    "
        />

<div className="flex justify-between items-center w-[85vw] h-[40px] mb-[1em] mx-auto
                md:
                lg:w-full ">
  <LikeButton />
  <div className="w-[30px]">
  <Arrow
    direction={
      show
        ? "M4.5 15.75l7.5-7.5 7.5 7.5"
        : "M19.5 8.25l-7.5 7.5-7.5-7.5"
    }
    onClick={() => setShow(!show)}
  />
  </div>
</div>


        {show && (
          <>
            <div className="flex justify-around  w-[95vw] h-max my-[1em] pb-[-10em] px-[0.8em] text-center
                            md:
                            lg:w-full
                            ">
              <div className="flex flex-col items-center mb-[1em]   mr-[2em]">
                <p className="text-yellow-500 font-bold text-[0.8em]
                              md:
                              lg:text-[1em]
                              ">
                  Created by:
                </p>
                {singleUser && (
                  <img
                    src={singleUser.photo}
                    alt={`${singleUser.name} ${singleUser.lastName}`}
                    className="w-[40px] h-[40px] mt-2 mb-1 rounded-full object-cover object-center bg-yellow-500
                              md:
                              lg:w-[60px] lg:h-[60px]
                              "
                  />
                )}
                {singleUser && (
                  <p className="text-yellow-500  text-[0.75em]
                                md:
                                lg:text-[0.9em] lg:font-bold
                                ">
                    {singleUser.name} {singleUser.lastName}
                  </p>
                )}
              </div>

              <div>
                <p className="text-yellow-500 font-bold text-[0.8em]
                              md:
                              lg:text-[1em]
                              ">
                  Duration:
                </p>
                <p className="text-gray-500  text-[0.8em]
                              md:
                              lg:text-[1em]
                              ">
                  {itinerary.duration} hours
                </p>
              </div>
              <div>
                <p className="text-yellow-500 font-bold text-[0.8em]
                              md:
                              lg:text-[1em]
                              ">
                  Hashtags:
                </p>
                <p className="text-gray-500  text-[0.8em]
                              md:
                              lg:text-[1em]
                              ">
                  {itinerary.tags}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-yellow-500 font-bold text-[0.8em]
                              md:
                              lg:text-[1em]
                              ">
                                Price:</p>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <MoneyIcon key={index} active={index < numberOfIcons} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-auto justify-center w-[90vw] h-[9em] bg-gray-800 mb-[1em] rounded
                            md:
                            lg:w-full lg:h-[7em]
                            ">
              <p className="text-center text-[2em] text-yellow-500 font-bold
                            md:
                            lg:text-[2em]
                            ">
                Sorry, there are no activities yet!
              </p>
              <p className="text-center text-[1.3em] text-yellow-500 pb-[0.5em] ">
                Please, come back soon.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CardItinerary;
