import { Link as Anchor } from "react-router-dom";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  let handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-white w-[100vw] h-[4em] bg-[#0f4387] flex justify-start items-center mt-[1em] px-[1em] mx-auto">
      <SocialIcons />
      <div className="w-full flex justify-around items-center font-semibold ">
        <p
          className="hidden underline underline-offset-[10px]
                     md:flex md:w-[40vw] md:no-underline md:text-center 
                     lg:flex "
        >
          MindHub 2023 - Full Stack MERN - Comision 05 TM - Otavio R. Oliveira
        </p>
        <div className=" text-white w-max h-[3.5em] bg-[#0f4387] flex justify-center items-center font-semibold gap-7">
          <Anchor to="/" className="hidden lg:flex ">
            {" "}
            Home{" "}
          </Anchor>
          <Anchor to="/cities" className="hidden lg:flex">
            {" "}
            Cities{" "}
          </Anchor>
          <div>
            <button
              className="w-max  text-white flex ml-[25vw] p-[0.5em] b 
                         md:ml-0
                         lg:gap-2 lg:ml-0"
              onClick={handleScrollToTop}
            >
              Back to top!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
