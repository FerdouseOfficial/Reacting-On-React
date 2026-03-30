import React from "react";

const UserList = () => {
  const user = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  return (
    <div className="flex justify-center items-center h-screen gap-10">
      {user.map(({ id, name, age }) => {
        return (
          <ul key={id} className="flex flex-col gap-11">
            {/* <li> {id} </li> */}
            <li className="mr-3"> Name: {name} </li>
            <li> Age: {age} </li>
          </ul>
        );
      })}
    </div>
  );
};

export default UserList;
