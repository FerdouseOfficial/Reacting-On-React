import React from "react";

const UserList = () => {
  const user = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  return <div>
    { user.map(({ id, name, age }) => {
        return <ul key={id}>
            <li> {id} </li>
            <li> {name} </li>
            <li> {age} </li>
        </ul>
    }) }
  </div>;
};

export default UserList;
