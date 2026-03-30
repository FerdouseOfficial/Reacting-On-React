import React from "react";

const Verification = ({ isValid }) => {
  const ValidPassword = () => {
    return <h1>Valid Password</h1>;
  };
  const InvalidPassword = () => {
    return <h1>Invalid Password</h1>;
  };

  let content;

  if (isValid) {
    content = <ValidPassword />;
  } else {
    content = <InvalidPassword />;
  }

  return <div> {content} </div>;
};

export default Verification;
