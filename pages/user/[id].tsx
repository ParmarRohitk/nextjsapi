// pages/[id].js

"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserDetails = () => {
    const router = useRouter();
    const { id } = router.query; // Access the dynamic route parameter

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`https://reqres.in/api/users/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setUser(data.data);
                });
        }
    }, [id]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="text-center">
            <h1>User Details</h1>
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
                    <tr key={user.id} className="border">
                        <td>{user.id}</td>
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
                </tbody>
            </table>
        </div>
    );
};

export default UserDetails;
