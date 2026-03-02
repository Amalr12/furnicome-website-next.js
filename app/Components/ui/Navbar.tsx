import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-gray-800 p-6 text-white">
            <div className=" font-bold text-2xl hover:text-gray-400">FURNICOME</div>
            <ul className="flex space-x-4 text-xl">
                <Link href="/">  <li><p className="hover:text-gray-400 font-bold">Home</p></li></Link>
                <Link href="/aboutt"> <li><p className="hover:text-gray-400 font-bold">About Us</p></li></Link>

                <Link href="/contact"> <li><p className="hover:text-gray-400 font-bold">Contact</p></li></Link>
            </ul>
        </nav>
    );
}