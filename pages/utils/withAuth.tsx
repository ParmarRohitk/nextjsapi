import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken } from './auth';

const withAuth = (WrappedComponent: FC<{}>) => {
    console.log('with auth')

    const AuthComponent = (props: { children: any; }) => {
        const router = useRouter();

        useEffect(() => {
            const authToken = getToken();

            if (authToken) {
                router.push('/dashboard');
                console.log('token found');

            } else if (router.pathname === '/auth/signin' || router.pathname === '/auth/signup') {
                router.push('/auth/signin');
                console.log('token not found');


            }
        }, []);

        return <>{props.children}</>;
    };

    return AuthComponent;
};

export default withAuth;
