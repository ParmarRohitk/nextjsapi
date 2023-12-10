"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserDetails = () => {
    const router = useRouter();
    const { id } = router.query; // Access the dynamic route parameter

    const [user, setUser] = useState(null);
    const [prevUserId, setPrevUserId] = useState(null);
    const [nextUserId, setNextUserId] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://reqres.in/api/users/${id}`);
                const data = await response.json();
                setUser(data.data);

                // Fetch previous user
                const prevId = parseInt(id, 10) - 1;
                setPrevUserId(prevId > 0 ? prevId : null);

                // Fetch next user
                const nextId = parseInt(id, 10) + 1;
                setNextUserId(nextId);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (id) {
            fetchUserData();
        }
    }, [id]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">User Details</h1>
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2">ID</th>
                            <th className="p-2">First Name</th>
                            <th className="p-2">Last Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={user.id} className="bg-white">
                            <td className="p-2 border border-gray-300">{user.id}</td>
                            <td className="p-2 border border-gray-300">{user.first_name}</td>
                            <td className="p-2 border border-gray-300">{user.last_name}</td>
                            <td className="p-2 border border-gray-300">{user.email}</td>
                            <td className="p-2 border border-gray-300">
                                <Image
                                    src={user.avatar}
                                    alt={`Avatar of ${user.first_name}`}
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between w-full">
                {prevUserId && (
                    <a href={`/user/${prevUserId}`} className="text-blue-500">
                        &lt; Previous
                    </a>
                )}
                {nextUserId !== null && (
                    <a href={`/user/${nextUserId}`} className="text-blue-500">
                        Next &gt;
                    </a>
                )}
            </div>
        </div>
    );
};

export default UserDetails;
