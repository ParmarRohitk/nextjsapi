import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signUpApi } from '../utils/api';
import '../../app/globals.css'

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

        <div className='text-center  bg-black text-orange-500 mx-[29%] mb-9'>
            <h1 className='text-center text-3xl mb-8 my-[30%] '>Sign Up</h1>
            <input className='bg-black text-white px-8 py-3 mb-9 border' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input className='bg-black text-white px-8 py-3 border mb-9' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button className='bg-orange-400 text-black px-9 py-3 mb-9' onClick={handleSignUp}>Sign Up</button>
        </div>

    );
};

export default SignUp;
// export default withAuth(SignUp);
