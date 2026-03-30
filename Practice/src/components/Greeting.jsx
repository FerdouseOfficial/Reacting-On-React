import React from "react";

const Greeting = ({ timeOfDay }) => {
  return (
    <div>{timeOfDay === "morning" ? "Good Morning" : "Good Afternoon"}</div>
  );
};

export default Greeting;
