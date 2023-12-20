'use client';
import { removeToken } from '@/pages/utils/auth';
import React, { useEffect } from 'react';
// import { removeToken } from './yourTokenFunctions'; // Import your token functions

const LogoutButton = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleLogout = () => {
        // Call the removeToken function to remove the token from local storage
        removeToken();
        // You can also perform other logout-related actions here if needed
    };

    useEffect(() => {
        // Attach the event handler when the component mounts
        const button = document.getElementById('logoutButton');
        if (button) {
            button.addEventListener('click', handleLogout);

            // Clean up the event handler when the component unmounts
            return () => {
                button.removeEventListener('click', handleLogout);
            };
        }
    }, [handleLogout]);

    return (
        <button id="logoutButton">
            Logout
        </button>
    );
};

export default LogoutButton;
