import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";


export default function Form() {
  const mail_signin = useRef();
  const password_signin = useRef();

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    //console.log(data);
  }

  return (
    <form
      action=""
      className="mt-[8em] flex flex-col grow p-[1em] gap-[1em] w-[80vw] mx-auto bg-blue-900 rounded
      md:
      lg:w-[40vw]
      2xl:mt-[13em]"
    >
      <p className="text-white text-[2em] text-center font-bold p-[0.5em]">Sign in</p>
      <p className="text-white font-bold mb-[-0.5em]">Email</p>
      <input
        ref={mail_signin}
        type="text"
        name="mail"
        id="mail"
        defaultValue=""
        placeholder="Enter your email adress"
        className="py-[0.5em] rounded indent-[1em] "
      />
      <p className="text-white font-bold mb-[-0.5em]">Password</p>
      <input
        ref={password_signin}
        type="password"
        name="password"
        id="password"
        defaultValue=""
        placeholder="Enter your password"
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
