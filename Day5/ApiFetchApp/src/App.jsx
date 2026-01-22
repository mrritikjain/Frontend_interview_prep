import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed");
        const result = await res.json();
        setUser(result);
        console.log(result);
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading..</p>;
  if (err) return <p>{err}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {user.map((e) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
