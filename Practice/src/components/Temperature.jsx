import React from "react";

const Temperature = ({ temp }) => {
  let Weather;
  if (temp < 15) {
    Weather = <h2>It's cold outside!</h2>;
  } else if (temp >= 15 && temp <= 25) {
    Weather = <h2>It's nice outside!</h2>;
  } else {
    Weather = <h2>It's hot outside</h2>;
  }
  return <div>{Weather}</div>;
};

export default Temperature;
