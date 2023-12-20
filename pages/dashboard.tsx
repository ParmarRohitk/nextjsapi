// Import necessary modules
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Testapi from '@/components/Hero/Testapi';
import withAuth from './utils/withAuth';
import Navbar from '@/components/Navbar';
import '../app/globals.css';
import { getToken } from './utils/auth';

// Define the Dashboard component
const Dashboard = () => {
    console.log('Dashboard')

    return (
        <>
            <Navbar />
            <Testapi />
            <h1>Dashboard</h1>
        </>
    );
};

export default withAuth(Dashboard);