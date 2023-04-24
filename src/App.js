import React, { useState } from "react";
import Inputs from "./components/Inputs";
import Cards from "./components/Cards";

const App = () => {
  //* creating an array of users
  const [users, setUsers] = useState([]);

  const handleUsers = (newUser) => {
    let newUsers = [...users, newUser];
    setUsers(newUsers);
    console.log(users);
  };

  console.log("users: ", users);
  return (
    <div>
      <Inputs handleUsers={handleUsers} />
      <Cards users={users} />
    </div>
  );
};

export default App;
