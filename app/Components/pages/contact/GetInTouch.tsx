"use client";
import { CiLocationOn } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function GetInTouch() {

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "service_15x2ykg",
                    "template_rmf8t85",
                    form.current,
                    "iPVPorUqcP7DOHyWO"
                )
                .then(
                    (result) => {
                        console.log("SUCCESS!", result.text);
                        if(result.text == "OK") {
                            alert("Message sent successfully!");
                            form.current?.reset();
                        }
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                    }
                );
        }
    };
    return (
        <div className="flex flex-col bg-gray-300 p-5 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-200 rounded-xl p-4 md:p-5">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-3 md:gap-4 mt-3 md:mt-4 p-3 md:p-5 bg-gray-200">
                        <div className="items-center justify-center flex">
                            <CiLocationOn className="text-3xl md:text-4xl font-bold hover:text-orange-500" />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg md:text-2xl">Visit</h1>
                            <h1>Paramekkav Oottupura 21/720, Thrissur,  Thrissur, Kerala - 680751</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-3 md:gap-4 mt-3 md:mt-4 p-3 md:p-5 bg-gray-200">
                        <div className="items-center justify-center flex">
                            <MdCall className="text-3xl md:text-4xl font-bold hover:text-orange-500" />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg md:text-2xl">Call</h1>
                            <h1>9876543210</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-3 md:gap-4 mt-3 md:mt-4 p-3 md:p-5 bg-gray-200">
                        <div className="items-center justify-center flex">
                            <MdEmail className="text-3xl md:text-4xl font-bold hover:text-orange-500" />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg md:text-2xl">Email</h1>
                            <h1>abcwe@org.com</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-3 md:gap-4 mt-3 md:mt-4 p-3 md:p-5 bg-gray-200">
                        <div className="items-center justify-center flex">
                            <CiClock2 className="text-3xl md:text-4xl font-bold hover:text-orange-500" />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg md:text-2xl">Working Hours</h1>
                            <h1>Monday-Friday 10 AM-7 PM</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-xl p-4 md:p-5">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Send Messege</h1>
                    <form ref={form} onSubmit={sendEmail} action="">
                        <input type="text" placeholder="Your Name" className="w-full p-2 md:p-3 mt-3 md:mt-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" name='name' />
                        <input type="email" placeholder="Your Email" className="w-full p-2 md:p-3 mt-3 md:mt-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" name='email' />
                        <textarea placeholder="Your Message" className="w-full p-2 md:p-3 mt-3 md:mt-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 md:h-32 text-sm md:text-base" name='message'></textarea>
                        <button type="submit" value="Send" className="w-full md:w-auto bg-gray-800 text-white px-4 md:px-6 py-2 md:py-3 mt-3 md:mt-4 rounded-md hover:bg-white hover:text-gray-800 border hover:border-gray-800 font-semibold">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    );
}