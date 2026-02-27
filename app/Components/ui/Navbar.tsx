export default function Navbar() {
    return(
        <nav className="flex items-center justify-between bg-gray-800 p-6 text-white">
            <div className=" font-bold text-2xl hover:text-gray-400">FURNICOME</div>
            <ul className="flex space-x-4 text-xl">
                <li><a href="/" className="hover:text-gray-400 font-bold">Home</a></li>
                <li><a href="/about" className="hover:text-gray-400 font-bold">About</a></li>
                <li><a href="/contact" className="hover:text-gray-400 font-bold">Contact</a></li>
            </ul>
        </nav>
    );
}