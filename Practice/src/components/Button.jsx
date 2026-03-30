import React from "react";

const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Button;
