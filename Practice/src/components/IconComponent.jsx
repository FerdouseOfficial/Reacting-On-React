import React from "react";
import { FaBeerMugEmpty } from "react-icons/fa6";

const IconComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        fontSize:"30px",
        color: "gold",
      }}
    >
      <FaBeerMugEmpty />
    </div>
  );
};

export default IconComponent;
