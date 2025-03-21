import React from "react";
import Login_bg from "../assets/Login_bg.jpg";
import Header from "./Header";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen pt-7"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Login_bg})`,
      }}
    >
      <Header />
    </div>
  );
};

export default Login;
