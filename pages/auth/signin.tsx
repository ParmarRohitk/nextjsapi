import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signInApi } from '../utils/api';
import { setToken } from '../utils/auth';

const SignIn: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const response = await signInApi({ email, password });
            const token = response.token; // Assuming the API response contains a token field

            // Store the token in localStorage or a secure storage mechanism
            setToken(token);

            // Redirect to dashboard after successful sign-in
            router.push('/dashboard');
        } catch (error) {
            console.error('Sign-in error:', error);
            // Handle error (show message or redirect to error page)
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignIn;
