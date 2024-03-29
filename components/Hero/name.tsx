"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cors from "cors";
import initMiddleware from "@/pages/lib/init-middleware";

interface UserData {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;

    name: string;
    slug: string;
    html_page: string;


}

const cors = initMiddleware(
    Cors({
        origin: ["https://localhost:3000", "https://localhost:5000", "*"],
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

const Name = () => {
    const [users, setUsers] = useState<UserData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        fetch("http://localhost:5000/api/test")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.response);
                console.log(data);
            });
    }, []);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
    const currentUsers = users && users.length > 0
        ? users.slice(indexOfFirstItem, indexOfLastItem)
        : [];
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="py-9 px-9 text-center">
            <h1 className="mb-4 text-3xl font-bold text-orange-800 ">Users</h1>
            <div className="mx-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">First Name</th>
                            <th className="px-4 py-2 border">Last Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((data) => (
                            <tr key={data.id} className="border">
                                {/*  <td className="px-4 py-2">
                                    <Link href={`/what-we-do/${user.id}`}>
                                        {user.first_name}
                                    </Link>
                                </td>
                                <td className="px-4 py-2 border">{user.last_name}</td>
                                <td className="px-4 py-2 border">{user.email}</td>
                                <td className="px-4 py-2 border">
                                    <Image
                                        src={user.avatar}
                                        alt={`Avatar of ${user.first_name}`}
                                        width={50}
                                        height={50}
                                        className="mx-auto border border-orange-500 border-solid "
                                    />
                                </td> */}
                                <td className="px-4 py-2 border">{data.id}</td>
                                <td className="px-4 py-2 border">{data.name}</td>
                                <td className="px-4 py-2 border">{data.slug}</td>
                                {<td className="px-4 py-2 border">{data.html_page}</td>}

                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                {<div className="mt-4 ml-8 mr-9">
                    {Array.from({ length: Math.ceil(users.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${currentPage === index + 1 ? 'bg-blue-700' : ''} mt-4 ml-5 mr-5`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>}

            </div>
        </div>
    );
};

export default Name;
