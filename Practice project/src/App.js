import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { key: Math.random().toString(), name: name, age: age },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
