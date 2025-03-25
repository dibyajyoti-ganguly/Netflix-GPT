import { React, useRef, useState } from "react";
import Login_bg from "../assets/Login_bg.jpg";
import Header from "./Header";
import checkValidData from "../../utils/checkValidData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
  const [togglebutton, setToggleButton] = useState(0);
  const [errormessage, setErrormessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  return (
    <div
      className="bg-cover bg-center min-h-screen pt-7"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${Login_bg})`,
      }}
    >
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col mt-7 mx-auto bg-black opacity-75 w-[450px] p-14 font-mono rounded-xl"
      >
        <h1 className="text-white text-4xl font-black tracking-tighter">
          {togglebutton ? "Sign Up" : "Sign In"}
        </h1>
        <br />
        <br />
        {togglebutton ? (
          <input
            type="text"
            placeholder="Full Name"
            className="text-white bg-stone-900 h-[52px] px-5 border-1 border-solid border-gray-300 rounded-md"
          />
        ) : (
          ""
        )}
        {togglebutton ? <br /> : ""}
        <input
          type="text"
          ref={email}
          placeholder="Email or mobile number"
          className="text-white bg-stone-900 h-[52px] px-5 border-1 border-solid border-gray-300 rounded-md"
        />
        <br />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="text-white bg-stone-900 h-[52px] px-5 border-1 border-solid border-gray-300 rounded-md"
        />
        <p className="text-red-500 mt-5 mx-1 font-bold tracking-widest">
          {errormessage}
        </p>
        <br />
        <button
          className="text-white bg-red-600 h-[44px] px-5 rounded-md text-lg cursor-pointer"
          onClick={() => {
            const message = checkValidData(
              email.current.value,
              password.current.value
            );
            console.log(message);
            setErrormessage(message);

            if (message) return;

            //Sign Up Logic
            if (togglebutton) {
              createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
              )
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  console.log(user);
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrormessage(errorCode + "-" + errorMessage);
                });
            } else {
              //Sign In Logic
              signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
              )
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user);
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  if (errorCode === "auth/invalid-credential")
                    setErrormessage("User not found!");
                });
            }
          }}
        >
          {togglebutton ? "Get Started" : "Sign In"}
        </button>
        <br />
        <br />
        <p className="text-stone-400">
          {togglebutton ? "Already a user?" : "New to Netflix?"}{" "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={() => {
              setToggleButton(!togglebutton);
            }}
          >
            {togglebutton ? "Sign in now." : "Sign up now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
