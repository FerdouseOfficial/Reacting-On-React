import React from "react";

const ProductInfo = () => {
  let name = "Laptop";
  let price = "$1200";
  let availAbility = "In stock";
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] gap-4">
      <h2 className="text-3xl uppercase"> {name} </h2>
      <p className="font-semibold"> {price} </p>
      <p className="tracking-wider font-extrabold"> {availAbility} </p>
    </div>
  );
};

export default ProductInfo;
