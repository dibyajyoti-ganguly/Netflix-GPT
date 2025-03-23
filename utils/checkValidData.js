import React from "react";

const checkValidData = (email, password) => {
  const isemailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const ispasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isemailValid) return "Email ID is not valid";
  if (!ispasswordValid) return "Password is not valid";

  return null;
};

export default checkValidData;
