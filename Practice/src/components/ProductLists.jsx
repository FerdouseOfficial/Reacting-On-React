import React from "react";

const ProductLists = () => {
  let product = [
    { id: 1, Name: "Laptop", Price: 1200 },
    { id: 2, Name: "Camera", Price: 5000 },
    { id: 3, Name: "Headphone", Price: 599 },
    { id: 4, Name: "PC", Price: 10000 },
    { id: 5, Name: "X-box", Price: 799 },
  ];
  return (
    <div className="flex justify-center items-center h-[60vh] gap-7">
      {product.map(({ id, Name, Price }) => {
        return (
          <ul key={id} className="flex flex-col gap-5">
            <li> Name: {Name} </li>
            <li> Price: {Price} </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ProductLists;
