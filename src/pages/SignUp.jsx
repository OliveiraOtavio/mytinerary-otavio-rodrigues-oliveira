import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function Form() {
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      action=""
      className="mt-[8em] flex flex-col grow p-[1em] gap-[1em] w-[40vw] mx-auto bg-blue-900 rounded"
    >
      <input
        ref={name}
        type="text"
        name="name"
        id="name"
        defaultValue=""
        placeholder="Type your name "
        className="py-[0.5em] rounded indent-[1em] "
      />
      <input
        ref={lastName}
        type="text"
        name="lastName"
        id="lastName"
        defaultValue=""
        placeholder="Type your last name"
        className="py-[0.5em] rounded indent-[1em] "
      />
      <input
        ref={country}
        type="text"
        name="country"
        id="country"
        defaultValue=""
        placeholder="Type your country"
        className="py-[0.5em] rounded indent-[1em] "
      />
      <input
        ref={photo}
        type="text"
        name="photo"
        id="photo"
        defaultValue=""
        placeholder="Type your photo url"
        className="py-[0.5em] rounded indent-[1em] "
      />
      <input
        ref={mail}
        type="text"
        name="mail"
        id="mail"
        defaultValue=""
        placeholder="Type your mail"
        className="py-[0.5em] rounded indent-[1em] "
      />
      <input
        ref={password}
        type="password"
        name="password"
        id="password"
        defaultValue=""
        placeholder="Type your password"
        className="py-[0.5em] rounded indent-[1em] "
      />
      <input
        type="button"
        value="Sign Up!"
        onClick={handleSignUp}
        className="cursor-pointer bg-blue-700 flex justify-center w-[10vw] mx-auto p-[0.5em] text-white font-bold rounded"
      />
      <p className="text-center text-white underline underline-offset-[0.5em]">
        Already have an account?{" "}
        <Anchor
          to='/login'
          className="font-bold text-green-400 cursor-pointer"
        >
          Sign In
        </Anchor>
      </p>
    </form>
  );
}
