import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="mx-48">
      <img src={Logo} alt="logo" className="w-[150px]" />
    </div>
  );
};

export default Header;
