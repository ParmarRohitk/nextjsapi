"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Testapi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, []);

  return (
    <div className="mt-9 py-9 px-9 text-center">
      <h1>Users</h1>
      <table className="mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border">
              <td>
                {/* Use Link without an additional <a> tag */}
                <Link href={`/user/${user.id}`}>
                  {user.id}
                </Link>
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <Image
                  src={user.avatar}
                  alt={`Avatar of ${user.first_name}`}
                  width={50}
                  height={50}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Testapi;
