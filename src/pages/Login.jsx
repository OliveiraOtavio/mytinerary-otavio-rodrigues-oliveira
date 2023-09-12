import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { signin } = user_actions


export default function Form() {
  const navigate = useNavigate()
  const mail_signin = useRef();
  const password_signin = useRef();
  const dispatch = useDispatch()

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    //console.log(data);
    let responseDispatch = dispatch(signin({ data }))
    .then( res => {
      console.log(res)
      if (res.payload.token) {
        Swal.fire({
          icon: 'success',
          title: 'Logged in!',
          text: 'Welcome to MyTinerary!',
          
        })
        navigate('/')
      } else if (res.payload.messages.length > 0) {
        Swal.fire({
          title: 'Something went wrong!',
          icon: 'error',
          html: res.payload.messages.map(each => `<p>${each}</p>`).join(''),            
          showCloseButton: true,
          
        })
      }
    })
  .catch(err => console.log(err))
  }
  let user = useSelector(store => store)
  console.log(user)

  return (
    <form
      action=""
      className="mt-[5em] flex flex-col grow p-[1em] gap-[1em] w-[90vw] h-[74vh] mx-auto  rounded bg-[url('/img/boarding-pass2.png')] bg-contain bg-center
      md:w-[60vw] md:h-[69vh]
      lg:w-[23.5vw] lg:h-[95vh] lg:bg-[url('/img/boarding-pass2.png')] lg:bg-contain lg:bg-center lg:mt-[8em]
      2xl:mt-[13em] 2xl:h-[89vh] "
    >
      {/* <p className="text-red-900 text-[2em] text-center font-bold p-[0.5em]">Sign in</p> */}
      <p className="text-[#0f4387] font-semibold  mt-[8em] mb-[-0.5em] 
      md:
      lg:mt-[7em] lg:mb-[-0.5em] 
      2xl:mt-[12em]
      ">Email</p>
      <input
        ref={mail_signin}
        type="text"
        name="mail"
        id="mail"
        defaultValue=""
        placeholder="Enter your email adress"
        className="py-[0.5em] rounded indent-[1em] border-[3px] border-blue-300"
      />
      <p className="text-[#0f4387] font-semibold  mb-[-0.5em]">Password</p>
      <input
        ref={password_signin}
        type="password"
        name="password"
        id="password"
        defaultValue=""
        placeholder="Enter your password"
        className="py-[0.5em] rounded indent-[1em] border-[3px] border-blue-300 "
      />
      <input
        type="button"
        value="Login!"
        onClick={handleSignIn}
        className="cursor-pointer bg-blue-700 flex justify-center w-[30vw] mx-auto p-[0.5em] text-white font-bold rounded mt-[0em]
                   md:
                   lg:mt-[10.5em] lg:mb-[-0.4em] lg:w-[10vw]
                   2xl:mt-[19em]"
      />
      <p className="text-center text-blue-500 font-bold  bg-white/80 h-[3em] pt-[0.5em] mt-[1.2em] rounded-[1em] border-2 border-blue-400
                    lg:bg-black/0 lg:border-0 lg:mt-0">
        Don't have an account yet?{" "}
        <Anchor
          to="/signup"
          className="ml-[0.5em] font-bold text-red-600 cursor-pointer"
        >
          Sign up!
        </Anchor>
      </p>
    </form>
  );
}
