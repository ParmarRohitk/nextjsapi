import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const headers = new Headers(request.headers);

    // Check if the token is present in the request headers
    const token = headers.get('Authorization');
    console.log(headers);
    if (token) {
        // Token is present, you can perform additional actions if needed
        console.log('Token found:', token);
    } else {
        console.log('Token not found form Auth');
        // Handle the absence of the token as needed, for example, redirect to login
        // You may want to customize this based on your application's requirements
        return NextResponse.redirect('/login');
    }

    // Set middlewareSet in headers
    headers.set('middlewareSet', 'mydata');

    const resp = NextResponse.next({
        request: {
            headers,
        },
    });

    return resp;
}
