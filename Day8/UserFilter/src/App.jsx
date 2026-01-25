import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUser] = useState([]);
  const [search, setsearch] = useState("");
  const [gender, setgender] = useState("all");

  //Api call
  useEffect(() => {
    fetch("https://dummyjson.com/users").then((res) =>
      res.json().then((data) => setUser(data.users)),
    );
  }, []);
  const filteredUsers = users.filter((user) => {
    const matchUser = user.firstName
      .toLowerCase()
      .includes(search.toLocaleLowerCase());

    const genderMatch = gender === "all" ? true : user.gender === gender;

    return matchUser && genderMatch;
  });
  return (
    <div>
      <h2>Users List</h2>
      <input
        type="search"
        placeholder="Search user"
        onChange={(e) => setsearch(e.target.value)}
      />
      <select onChange={(e) => setgender(e.target.value)}>
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} style={{ lineHeight: "1.5rem" }}>
            {user.firstName.toUpperCase()}
            {user.lastName.toUpperCase()} - {user.gender.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
