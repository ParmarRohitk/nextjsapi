import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signUpApi } from '../utils/api';

const SignUp: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await signUpApi({ email, password });
            const token = response.token; // Assuming the API response contains a token field

            // Store the token in localStorage or a secure storage mechanism
            localStorage.setItem('token', token);

            // Redirect to dashboard after successful signup
            router.push('/dashboard');
        } catch (error) {
            console.error('Sign-up error:', error);
            // Handle error (show message or redirect to error page)
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUp;
