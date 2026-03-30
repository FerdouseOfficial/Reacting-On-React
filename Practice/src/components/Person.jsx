//  Doing it Using JavaScript Destructuring

// import React from "react";

// const Person = ({ name, age }) => {
//   return (
// <div className="flex flex-col justify-center items-center h-[60vh] gap-7">
//   <h2>Name: {name} </h2>
//   <p>Age: {age} </p>
// </div>
//   );
// };
// export default Person;






//  Doing it Using React Props

import React from "react";

const Person = (props) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[60vh] gap-7">
        <h2>Name: {props.name} </h2>
        <p>Age: {props.age} </p>
      </div>
    </div>
  );
};

export default Person;
