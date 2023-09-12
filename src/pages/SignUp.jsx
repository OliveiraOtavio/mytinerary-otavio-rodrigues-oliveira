import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Form() {
  const navigate = useNavigate();
  const name = useRef();
  const lastName = useRef();
  const country = useRef();
  const photo = useRef();
  const mail = useRef();
  const password = useRef();

  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(
        apiUrl + "users/signup", // url del endpoint de creacion
        data // objeto con los datos para crear
      );
      Swal.fire({
        icon: "success",
        title: "User created successfully!",
        text: "Welcome to MyTinerary!",
      });
      navigate("/login");
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        action=""
        className="w-[80vw] h-[70vh] bg-[url('/img/boarding-pass.png')] bg-cover mt-[6em] mb-[1em] flex flex-col grow p-[1em] pr-[0.5em] gap-[2em]  mx-auto rounded-[1.5em] 
      md:bg-[url('/img/boarding-pass.png')] md:bg-cover md:h-[80vh]
      lg:w-[95vw] lg:h-[92vh] lg:mt-[8em] lg:bg-[url('/img/air-ticket5.png')] lg:bg-cover
      2xl:mt-[13em] 2xl:h-[80vh]"
      >
        {/* <p className="text-red-500 text-[2em] text-center font-bold p-[0.5em]">Create account</p> */}
        <div className="mt-[7em] p-[0.5em] pr-[0.7em] flex flex-col self-start rounded-[1em] bg-blue-500/50                     
                        md:bg-blue-500/50 md:w-[75vw] md:gap-[0.5em] md:mt-[14em]
                        lg:gap-0 lg:w-[27vw] lg:mt-[5.5em] lg:bg-white/0 lg:pl-[1em] 
                        2xl: 2xl:mt-[8em] 2xl:text-[1.2em]">

          <p className="text-[#0f4387] font-bold ml-auto ml-0
                        lg:ml-[0.4vw] lg:mb-[0.3em] lg:w-max 
                        md:ml-0">
            Name
          </p>
          <input
            ref={name}
            type="text"
            name="name"
            id="name"
            defaultValue=""
            placeholder="Enter your name "
            className="ml-auto border-[3px] border-blue-400/50 w-[70vw] font-semibold py-[0.2em] rounded indent-[1em]
                        md:w-full
                        lg:w-[25vw]  "
          />
          <p className="text-[#0f4387] font-bold ml-auto ml-0
                        lg:ml-[0.4vw] lg:mb-[0.3em] lg:w-max 
                        md:ml-0">
            Last Name
          </p>
          <input
            ref={lastName}
            type="text"
            name="lastName"
            id="lastName"
            defaultValue=""
            placeholder="Enter your last name"
            className="ml-auto border-[3px] border-blue-400/50 w-[70vw] font-semibold py-[0.2em] rounded indent-[1em]
            md:w-full
            lg:w-[25vw]  "
          />
          <p className="text-[#0f4387] font-bold ml-auto ml-0
                        lg:ml-[0.4vw] lg:mb-[0.3em] lg:w-max 
                        md:ml-0">
            Country
          </p>
          <select
            ref={country}
            name="country"
            id="country"
            defaultValue=""
            className="ml-auto border-[3px] border-blue-400/50 w-[70vw] font-semibold py-[0.2em] rounded indent-[1em]
            md:w-full
            lg:w-[25vw] "
          >
            <option value="Brazil">Brazil - 🇧🇷</option>
            <option value="Argentina">Argentina - 🇦🇷</option>
            <option value="Bolivia">Bolivia - 🇧🇴</option>
            <option value="United States">United States - 🇺🇸</option>
            <option value="Japan">Japan - 🇯🇵</option>
            <option value="China">China - 🇨🇳</option>
            <option value="Russia">Russia - 🇷🇺</option>
            <option value="United Kingdom">United Kingdom - 🇬🇧</option>
            <option value="France">France - 🇫🇷</option>
            <option value="Germany">Germany - 🇩🇪</option>
            <option value="other">Other Country - 🌍</option>
          </select>
          <p className="text-[#0f4387] font-bold ml-auto ml-0
                        lg:ml-[0.4vw] lg:mb-[0.3em] lg:w-max 
                        md:ml-0">
            Profile Picture
          </p>
          <input
            ref={photo}
            type="text"
            name="photo"
            id="photo"
            defaultValue=""
            placeholder="Enter your photo url"
            className="ml-auto border-[3px] border-blue-400/50 w-[70vw] font-semibold py-[0.2em] rounded indent-[1em]
            md:w-full
            lg:w-[25vw]  "
          />
          <p className="text-[#0f4387] font-bold ml-auto ml-0
                        lg:ml-[0.4vw] lg:mb-[0.3em] lg:w-max 
                        md:ml-0">
            Email
          </p>
          <input
            ref={mail}
            type="text"
            name="mail"
            id="mail"
            defaultValue=""
            placeholder="Enter your email adress"
            className="ml-auto border-[3px] border-blue-400/50 w-[70vw] font-semibold py-[0.2em] rounded indent-[1em]
            md:w-full
            lg:w-[25vw]  "
          />
          <p className="text-[#0f4387] font-bold ml-auto ml-0
                        lg:ml-[0.4vw] lg:mb-[0.3em] lg:w-max 
                        md:ml-0">
            Password
          </p>
          <input
            ref={password}
            type="password"
            name="password"
            id="password"
            defaultValue=""
            placeholder="Enter your password"
            className="ml-auto border-[3px] border-blue-400/50 w-[70vw] font-semibold py-[0.2em] rounded indent-[1em]
            md:w-full
            lg:w-[25vw]  "
          />
        </div>

        <input
          type="button"
          value="Sign Up!"
          onClick={handleSignUp}
          className="bg-blue-700 cursor-pointer  text-white font-bold rounded h-[2.5em]
                      md:w-[6em] md:h-[2.5em] md:ml-0
                      lg:w-[8vw] lg:p-[0.5em] lg:mt-[-1.6em] lg:ml-[0.9em]"
        />

        <div className="w-max flex items-center justify-center ml-[10vw] mt-[-1.5em] space-x-4">
          <p className="w-max  text-center text-blue-500 font-bold underline underline-offset-[0.5em]
                        md:text-[14px] md:ml-[1.4em] md:mt-[-4em] md:bg-white md:h-[3vh] md:pt-[0.3em] md:pl-[0.8em] md:border-2 md:border-blue-300 md:rounded-[0.5em]
                        lg:h-max lg:text-[16px] lg:ml-[-0.5em] lg:mt-[-3.4em] lg:py-[0.4em]">
            Already have an account?{" "}
            <Anchor
              to="/login"
              className="ml-[0.5em] pr-[1.5em] font-bold text-red-600 cursor-pointer"
            >
              Sign In
            </Anchor>
          </p>

          <div
            onClick={() => {
              Swal.fire({
                icon: "error",
                title: "Sorry",
                text: "We don't have this feature yet!",
              });
            }}
            className="hidden ml-[10em] flex items-center w-max bg-blue-400 p-[0.5em] rounded text-center text-white font-bold cursor-pointer 
                       md:flex md:mt-[-3.5em]
                       lg:flex lg:mt-[-3.5em]
                       2xl:flex"
                       
          >
            Or Sign Up with Google
            <img
              src="/img/google-icon.png"
              alt="Google Icon"
              className="bg-white p-[0.2em] rounded inline w-[30px] ml-1"
            />
          </div>
        </div>
      </form>
    </>
  );
}
