import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default function Navbar() {
    return (
        <div className="w-full text-center px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <Link className='pt-4 ml-2 mr-2' href="/">Home</Link >
                <Link className='pt-4 ml-2 mr-2' href="/what-we-do">Service</Link >
                <Link className='pt-4 ml-2 mr-2' href="/what-we-do/web-development">Web</Link >

                <Link className='pt-4 ml-2 mr-2' href="/auth/signup">Signup</Link >
                <Link className='pt-4 ml-2 mr-2' href="/auth/signin">signin</Link >
                {/* <Link className='pt-4 ml-2 mr-2' href="/">Logout</Link > */}
                <LogoutButton />
            </nav>
        </div>
    );
}
