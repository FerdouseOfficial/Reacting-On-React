// import React, { useState } from "react";

// const StatePr = () => {
//   const [count, setCount] = useState(0);
//   const increase = () => setCount(count + 1);
//   const decrease = () => setCount(count - 1);
//   return (
//     <div>
//       <h1 className="px-4 py-2  ml-17 text-6xl">{count}</h1>
//       <button
//         onClick={increase}
//         className="px-4 py-2 bg-amber-500 m-7 cursor-pointer"
//       >
//         +
//       </button>
//       <button
//         onClick={decrease}
//         className="px-4 py-2 bg-amber-500 m-7 cursor-pointer"
//       >
//         -
//       </button>
//     </div>
//   );
// };

// export default StatePr;

// Practice useState on Array

import React, { useState } from "react";

const StatePr = () => {
  const [friend, setFriend] = useState(["Alex", "John"]);
  const addOneFriend = () => {
    setFriend([...friend, "Jihad Molla"]);
  };
  const deleteOneFriend = () => {
    setFriend(friend.filter((f) => f !== "John"));
  };
  const updateOneFriend = () => {
    setFriend(friend.map((f) => (f === "Alex" ? "Alex Smith" : f)));
  };
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <div className="m-10 ml-">
        {friend.map((f) => {
          return (
            <li key={Math.random()} className="mr-14">
              {f}
            </li>
          );
        })}
      </div>
      <div>
        <button
          onClick={addOneFriend}
          className="px-4 py-2 rounded bg-amber-500 ml-2 font-semibold cursor-pointer"
        >
          Add One Friend
        </button>
        <button
          onClick={deleteOneFriend}
          className="px-4 py-2 rounded bg-amber-500 ml-2 font-semibold cursor-pointer"
        >
          Delete One Friend
        </button>
        <button onClick={updateOneFriend} className="px-4 py-2 rounded bg-amber-500 ml-2 font-semibold cursor-pointer">
          Update One Friend
        </button>
      </div>
    </div>
  );
};

export default StatePr;

// Practice useState on Object
