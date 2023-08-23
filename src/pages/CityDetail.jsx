import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiUrl";

export default function CityDetail() {
  const { city_id } = useParams();
  const [cityName, setCityName] = useState("");
  const [cityPhoto, setCityPhoto] = useState("");

  useEffect(() => {
    // función para obtener el nombre y la foto de la ciudad desde la api
    async function fetchCityDetails() {
      try {
        const response = await axios.get(`${apiUrl}cities/${city_id}`);
        setCityName(response.data.response.city);
        setCityPhoto(response.data.response.photo);
      } catch (error) {
        console.error("Error fetching city details:", error);
      }
    }
    fetchCityDetails();
  }, [city_id]);

  return (
    <div
      className="bg-gray-800 w-[100vw] mt-[5em] mx-auto flex flex-col justify-center   
                    md:mt-[5em] md:p-[2em]
                    lg:mt-[8em] "
    >
      <div
        className="text-[18px] text-white text-center mb-[2em] mt-[1em] mx-[1em]
                      md:text-[20px]
                      lg:text-[25px] lg:mt-0
                      2xl:mt-[2em]"
      >
        {cityName ? (
          <>
            Sorry! The "details page" of{" "}
            <span className="text-yellow-500 font-bold ">{cityName}</span> is
            under construction!
          </>
        ) : (
          "Loading..."
        )}
      </div>
      <img
        className="justify-center rounded w-[80vw] h-auto mx-auto
                   md:w-[80vw] md:h-auto md:mx-auto
                   lg:w-[65vw]"
        src={cityPhoto || "/img/page-under-construction-transformed.png"}
        alt="City"
      />

      <div
        className="flex flex-col bg-blue-400 w-[80vw] h-auto  justify-center items-center mx-auto mt-[2em]
                      lg:w-[65vw]"
      >
        <p
          className="text-[20px] text-white font-bold my-[1em]
                      md:text-[26px] md:my-[1em]
                      lg:text-[32px]"
        >
          {" "}
          There are no itineraries yet!
        </p>
        <img
          className="w-[60vw] mb-[2em]
                     md:w-[40vw] md:mb-[2em] 
                     lg:w-[45vw] "
          src="/img/no-itineraries.jpg"
          alt="No itineraries image"
        />
      </div>
      <div
        className="mt-[1em] mb-[1em]
                      md:mt-[1em] md:mb-[1em]"
      >
        <Anchor
          to={"/cities"}
          className="w-[30vw] flex justify-center bg-[#4F46E5] text-center py-1 rounded text-white p-[0.5em] py-[0.8em] mx-auto"
        >
          Back to cities!
        </Anchor>
      </div>
    </div>
  );
}
