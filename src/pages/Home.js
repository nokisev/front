import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  return (
    <div>
      {users.map((user, index) => (
        <h3 key={index}>
          <i>{index + 1}</i> | {user.name} | {user.username} | {user.email}
        </h3>
      ))}
    </div>
  );
}
