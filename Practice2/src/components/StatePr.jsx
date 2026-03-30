import React, { useState } from "react";

const StatePr = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  return (
    <div>
      <h1 className="px-4 py-2 m-7">{count}</h1>
      <button onClick={increase} className="px-4 py-2 bg-amber-500 m-7">
        +
      </button>
    </div>
  );
};

export default StatePr;
