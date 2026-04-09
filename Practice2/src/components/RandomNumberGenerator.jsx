import React, { useState } from "react";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const RandomNumberGen = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h1 className="text-2xl font-extrabold">Random Number: {randomNumber}</h1>
      <button
        onClick={RandomNumberGen}
        className="px-4 py-2 mt-5 bg-amber-500 rounded cursor-pointer"
      >
        Generatore Number
      </button>
    </div>
  );
};

export default RandomNumberGenerator;
