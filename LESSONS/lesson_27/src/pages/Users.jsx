import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error while fetching users", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul className="flex gap-4 flex-col">
      {users.map((user) => (
        <li key={user.id}>
          <Link
            to={`/users/${user.id}`}
            className="block p-4 bg-gray-800 hover:bg-gray-700 transition">
            <span className="font-semibold text-white">{user.name}</span>
            <p className="text-sm text-gray-400">{user.email}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Users;
