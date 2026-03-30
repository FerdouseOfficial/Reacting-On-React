import React from "react";

const Verification = () => {
  const ValidPassworrd = () => {
    <h1>Valid Password</h1>;
  };
  const InvalidPassworrd = () => {
    <h1>Invalid Password</h1>;
  };

  const Password = (isValid) => {
    if (isValid) {
      return <ValidPassworrd />;
    }
    return <InvalidPassworrd />;
  };

  return <div></div>;
};

export default Verification;
