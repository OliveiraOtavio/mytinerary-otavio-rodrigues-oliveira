import { Link as Anchor } from "react-router-dom";

export default function CardCity({ src, alt, text, id, country }) {
  return (
    <div
      className="relative flex flex-col items-center justify-between rounded p-[0.5em] w-[90vw] mx-auto mb-[1em] 
                    md:w-[45vw] md:p-0
                    lg:w-[24vw] lg:mb-[1em]"
    >
      <img
        className="w-[80vw] h-[25vh] object-cover rounded-[15px]
                     md:w-[45vw] md:h-[20vh] 
                     lg:w-[22vw] lg:h-[35vh]  lg:rounded-[15px] lg:mb-[1.5em]"
        src={src}
        alt={alt}
      />
      <p
        className=" w-[80vw] absolute top-[0.5em]  flex flex-col pb-[0.5em]  font-semibold mb-[0.5em] text-white 
          md:w-[45vw] md:top-0
          lg:w-[22vw]"
      >
        <span className="font-bold flex items-center  text-md bg-black/50 py-[0.3em] rounded-t-[15px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-1 ml-2 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span>
            {text} - {country}
          </span>
        </span>
      </p>
      {id !== "64e157ac7653f025279ca322" && (
        <div
          className="absolute bottom-[1em] left-[1.5em] p-[0.5em] transform transition-transform duration-100 hover:scale-110
                      md:bottom-[0.5em] md:left-[0.5em]
                      lg:left-[1em] lg:bottom-[2em]
                      2xl:left-[1.5em] 2xl:bottom-[2.5em] "
        >
          <Anchor
            to={"/city/" + id}
            className=" bg-[#4F46E5] w-1/4 text-center py-1 rounded text-white p-[0.5em] py-[0.4em]
                                               2xl:p-[0.5em] 2xl:text-[18px] "
          >
            View More!
          </Anchor>
        </div>
      )}
    </div>
  );
}
