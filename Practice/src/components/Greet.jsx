// import React from "react";

// function Greet() {
//   return (
//     <div>
//       <h2>Hello everyone</h2>
//     </div>
//   );
// }

// export default Greet;
// import React from "react";

// const Greet = () => {
//   return (
//     <div>
//       <h2>Hello Everyone</h2>
//     </div>
//   );
// };

// export default Greet;

import React from "react";

const Greet = () => {
  let greet = "Hello Everyone I am Jihad";
  let intro = "I am a billionaire. ";
  let date =  new Date();
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] ">
      <h1>{greet}</h1>
      {/* <p>{intro}</p> */}
      <p>{date.toDateString()}</p>
    </div>
  );
};

export default Greet;
