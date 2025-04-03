/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../utils/userSlice";
import Logo from "../assets/logo.svg";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse");
        // ...
      }
    });
  }, []);

  return (
    <div className="mx-48">
      <img src={Logo} alt="logo" className="w-[150px]" />
    </div>
  );
};

export default Header;
