import React from "react";

const ProductInfo = () => {
  //   let name = "Laptop";
  //   let price = "$1200";
  //   let availAbility = "In stock";
  let product = ["Laptop", "1200", "In stock"];
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] gap-4">
      <h2 className="text-3xl uppercase"> {product[0]} </h2>
      <p className="font-semibold"> ${product[1]} </p>
      <p className="tracking-wider font-extrabold"> {product[2]} </p>
    </div>
  );
};

export default ProductInfo;
