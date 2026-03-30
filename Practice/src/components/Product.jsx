// import React from 'react'

// const Product = (props) => {
//   return (
//     <div>
//         <h2>Name: {props.name} </h2>
//         <h2>Price: {props.price} </h2>
//     </div>
//   )
// }

// export default Product

// Doing it using JS Destructuring

import React from "react";

const Product = ({ name, price }) => {
  return (
    <div>
      <h2>Name: {name} </h2>
      <h2>Price: {price} </h2>
    </div>
  );
};

export default Product;
