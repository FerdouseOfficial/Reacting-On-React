import React from "react";

const UserStatus = ({ isloggedIn, isAdmin }) => {
//   return <div>{isloggedIn === "true" ? "Welcome Admin" : "Welcome user"}</div>; for only isloggedIn

// for 2 props he isloggedIn and isAdmin
    if(isloggedIn && isAdmin) {
        return <h1>Welcome Admin</h1>
    } else {
        return <h1>Welcome User</h1>
    }


};

export default UserStatus;
