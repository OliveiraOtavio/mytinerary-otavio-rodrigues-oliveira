// export default function Login() {
//   return (
//     <div
//       className="bg-gray-800 w-[100vw] mt-[8em] mx-auto flex justify-center p-[2em] rounded
//                     2xl:mt-[12em]"
//     >
//       <img
//         className="flex justify-center rounded w-[50vw] "
//         src="/img/page-under-construction-transformed.png"
//         alt="Page under construction"
//       />
//     </div>
//   );
// }
import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";
//import axios from "axios";
//import apiUrl from "../apiUrl";

export default function Form() {
  const mail_signin = useRef();
  const password_signin = useRef();

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    console.log(data);
  }

  return (
    <form
      action=""
      className="mt-[8em] flex flex-col grow p-[1em] gap-[1em] w-[40vw] mx-auto bg-blue-900 rounded"
    >
      <input
        ref={mail_signin}
        type="text"
        name="mail"
        id="mail"
        defaultValue=""
        placeholder="Type your mail"
        className="py-[0.5em] rounded indent-[1em] "
      />
      <input
        ref={password_signin}
        type="password"
        name="password"
        id="password"
        defaultValue=""
        placeholder="Type your password"
        className="py-[0.5em] rounded indent-[1em] "
      />
      <input
        type="button"
        value="Login!"
        onClick={handleSignIn}
        className="cursor-pointer bg-blue-700 flex justify-center w-[10vw] mx-auto p-[0.5em] text-white font-bold rounded"
      />
      <p className="text-center text-white underline underline-offset-[0.5em]  ">
        Don't you have an account?{" "}
        <Anchor
          to="/signup"
          className=" font-bold text-green-400 cursor-pointer"
        >
          Sign up!
        </Anchor>
      </p>
    </form>
  );
}
