import React from "react";

const Pr_Expressions = () => {
  const usersInfo = [
    {
      username: "Jihad",
      email: "Jihad@gmail.com",
      location: "Bangladesh",
    },
    {
      username: "Mijanur",
      email: "Mijanur@gmail.com",
      location: "India",
    },
    {
      username: "Ripon",
      email: "Ripon1@gmail.com",
      location: "Gulistan",
    },
  ];
  return (
    <div className="flex  items-center justify-center h-[50vh] gap-7 ">
      {usersInfo.map(({ username, email, location }) => {
        // doing it using destructuring
        return (
          <ul key={Math.random()} className="list-disc">
            <li> {username} </li>
            <li> {email} </li>
            <li> {location} </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Pr_Expressions;
