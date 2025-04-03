import React, { useEffect } from "react";
import Logo from "../assets/logo.svg";
import Userlogo from "../assets/Userlogo.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";

function Browsheader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mx-[10%] flex justify-between font-mono">
      <img src={Logo} alt="logo" className="w-[100px]" />
      <div className="flex">
        <img src={Userlogo} alt="userlogo" className="rounded-sm" />
        <button
          className="cursor-pointer px-5 text-zinc-300"
          onClick={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                console.log("Sign-out successful.");
              })
              .catch((error) => {
                // An error happened.
                console.log(error);
              });
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Browsheader;
