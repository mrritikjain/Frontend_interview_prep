import { useState } from "react";

const users = [
  { name: "Ritik", active: true, age: 24 },
  { name: "Amit", active: false, age: 28 },
  { name: "Neha", active: true, age: 22 },
];

export default function UserDashboard() {
  const [query, setQuery] = useState("");
  const [showActive, setShowActive] = useState(false);

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))
    .filter((user) => (showActive ? user.active : true));

  const avgAge =
    filteredUsers.reduce((sum, u) => sum + u.age, 0) /
    (filteredUsers.length || 1);

  return (
    <div>
      <h2>User Dashboard</h2>

      <input
        placeholder="Search user"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={() => setShowActive(!showActive)}
        />
        Active only
      </label>

      <ul>
        {filteredUsers.map((u, i) => (
          <li key={i}>
            {u.name} - {u.age}
          </li>
        ))}
      </ul>

      <p>Average Age: {avgAge.toFixed(0)}</p>
    </div>
  );
}
