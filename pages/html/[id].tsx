"use client";
// Import necessary types from Next.js
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import '../../app/globals.css'

// Define the user type
interface User {
    id: number;
    name: string;
    html_page: string;
    email: string;
    avatar: string;
}

const UserDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const [user, setUser] = useState<User | null>(null); // Use the User type here
    const [prevUserId, setPrevUserId] = useState<number | null>(null);
    const [nextUserId, setNextUserId] = useState<number | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/test/${id}`);
                const data = await response.json();

                if (data && data.response) {
                    setUser(data.response); // Assuming the data you want is in the 'response' array
                    console.log(data);

                    // Fetch previous user
                    const prevId = parseInt(id as string, 10) - 1;
                    setPrevUserId(prevId > 0 ? prevId : null);

                    // Fetch next user
                    const nextId = parseInt(id as string, 10) + 1;
                    setNextUserId(nextId);
                } else {
                    // Handle the case where the expected data is not present in the response
                    console.error('Invalid response structure');
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (id) {
            fetchUserData();
        }
    }, [id]);


    if (!user) {
        return <p className="bg-dark text-orange-700 text-center my-[23%] animate-ping">Loading...</p>;
    }

    return (
        <div>
            {user ? (
                <div>
                    {/* <h1>{user.name}</h1> */}
                    <div dangerouslySetInnerHTML={{ __html: user.html_page }} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserDetails;
