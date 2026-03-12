"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (

        <nav className="bg-gray-800 text-white p-6 ">

            {/* Top navbar */}
            <div className="flex items-center justify-between">

                <div className="text-2xl font-bold">
                    FURNICOME
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-lg font-bold z-10 p-5">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/aboutt">About Us</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                {/* Mobile Menu Icon */}
                <IoMenu
                    onClick={() => setOpen(!open)}
                    className="h-7 w-7 md:hidden cursor-pointer"
                />

            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="flex flex-col mt-4 space-y-4 md:hidden text-lg font-bold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/aboutt">About Us</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            )}

        </nav>

    );
}