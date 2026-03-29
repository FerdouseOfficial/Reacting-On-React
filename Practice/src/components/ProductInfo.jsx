import React from "react";

const ProductInfo = () => {
  //   let name = "Laptop";
  //   let price = "$1200";
  //   let availAbility = "In stock";
  //   let product = ["Laptop", "1200", "In stock"]; // Doing using Array
  let product = {
    // Doing using Object
    name: "Laptop",
    price: "1200",
    availibility: "In stock",
  };
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] gap-4">
      <h2 className=" ">Name : {product.name} </h2>
      <h2 className=""> Price: ${product.price} </h2>
      <h2 className="tracking-wider">Availibility: {product.availibility}</h2>
    </div>
  );
};

export default ProductInfo;
