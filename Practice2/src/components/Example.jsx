// import React, { useState } from "react";

// const Example = () => {
//   const [randomNumber, setRandomNumber] = useState(() => {
//     return Math.floor(Math.random() * 100);
//   });
//   const generateNewRandomNumber = () => {
//     setRandomNumber(Math.floor(Math.random() * 100));
//   };
//   return (
//     <div>
//       <h1>Random Number:- {randomNumber}</h1>
//       <button
//         onClick={generateNewRandomNumber}
//         className=" px-4 py-2 bg-amber-500 rounded font-semibold m-2 cursor-pointer"
//       >
//         Generate New Random Number
//       </button>
//     </div>
//   );
// };

// export default Example;

import React, { useState } from "react"; 

const Example = () => {
  const [boom, setBoom] = useState("You are not going forgot me");
  const boomb = () => {
    setBoom("Boom MotherFucker");
  };
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <h1>
        {boom}:- Lower The voice of your Badself. Destroy your Currect 
        Version{" "}
      </h1>
      <button
        onClick={boomb} 
        className="px-4 py-2 bg-amber-300 roudded m-2 cursor-pointer"
      >
        Boom
      </button>
    </div> 
  );
};

export default Example;
