import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="w-full text-center px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <Link className='pt-4 ml-2 mr-2' href="/">Home</Link >
                <Link className='pt-4 ml-2 mr-2' href="/what-we-do">Service</Link >
                <Link className='pt-4 ml-2 mr-2' href="/what-we-do/web-development">Web</Link >
            </nav>
        </div>
    );
}
