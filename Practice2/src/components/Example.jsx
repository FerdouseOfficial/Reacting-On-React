import React, { useState } from "react";

const Example = () => {
  const [randomNumber, setRandomNumber] = useState(() => {
    return Math.floor(Math.random() * 100);
  });
  const generateNewRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };
  return (
    <div>
      <h1>Random Number:- {randomNumber}</h1>
      <button
        onClick={generateNewRandomNumber}
        className=" px-4 py-2 bg-amber-500 rounded font-semibold m-2 cursor-pointer"
      >
        Generate New Random Number
      </button>
    </div>
  );
};

export default Example;
