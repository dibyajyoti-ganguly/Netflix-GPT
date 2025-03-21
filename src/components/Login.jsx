import React from "react";
import Login_bg from "../assets/Login_bg.jpg";
import Header from "./Header";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen pt-7"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${Login_bg})`,
      }}
    >
      <Header />
      <form className="flex flex-col mt-7 mx-auto bg-black opacity-70 w-[450px] h-[520px] p-14 font-mono rounded-lg">
        <h1 className="text-white text-4xl font-black tracking-tighter">
          Sign In
        </h1>
        <br />
        <br />
        <input
          type="text"
          placeholder="Email or mobile number"
          className="text-white bg-stone-900 h-[52px] px-5 border-1 border-solid border-gray-300 rounded-md"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="text-white bg-stone-900 h-[52px] px-5 border-1 border-solid border-gray-300 rounded-md"
        />
        <br />
        <br />
        <button className="text-white bg-red-600 h-[44px] px-5 rounded-md text-lg cursor-pointer">
          Sign In
        </button>
        <br />
        <br />
        <p className="text-stone-600">
          New to Neflix? <span className="text-white">Sign up now.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
