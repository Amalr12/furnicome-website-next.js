import { CiLocationOn } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";

export default function GetInTouch() {
    return(
        <div className="flex flex-col  h-screen bg-gray-300 p-10">
            <div className="grid grid-cols-2 gap-4">
                 <div className="bg-gray-200 rounded-xl p-5">
                <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
                <div className="grid grid-cols-[1fr_4fr] gap-4 mt-4 p-5 bg-gray-200  ">
                    <div className="  items-center justify-center flex">
                    <CiLocationOn className="text-4xl font-bold hover:text-orange-500"/>
                    </div>
                    <div className=" ">
                        <h1 className="font-bold text-2xl ">Visit</h1>
                        <h1>Paramekkav Oottupura 21/720, Thrissur,  Thrissur, Kerala - 680751</h1>
                    </div>
                </div>
                 <div className="grid grid-cols-[1fr_4fr] gap-4 mt-4 p-5 bg-gray-200 justify-around flex-col ">
                    <div className="  items-center justify-center flex">
                    <MdCall  className="text-4xl font-bold hover:text-orange-500"/>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl ">Call</h1>
                        <h1>9876543210</h1>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_4fr] gap-4 mt-4 p-5 bg-gray-200 justify-around flex-col ">
                    <div className="  items-center justify-center flex">
                    <MdEmail className="text-4xl font-bold hover:text-orange-500"/>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl ">Email</h1>
                        <h1>abcwe@org.com</h1>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_4fr] gap-4 mt-4 p-5 bg-gray-200 justify-around flex-col ">
                    <div className="  items-center justify-center flex">
                    <CiClock2  className="text-4xl font-bold hover:text-orange-500"/>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl ">Working Hours</h1>
                        <h1>Monday-Friday 10 AM-7 PM</h1>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 rounded-xl p-5">
                <h1 className="text-4xl font-bold text-gray-800">Send Messege</h1>
                <form action="">
                    <input type="text" placeholder="Your Name" className="w-full p-3 mt-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input type="email" placeholder="Your Email" className="w-full p-3 mt-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <textarea placeholder="Your Message" className="w-full p-3 mt-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-3 mt-4 rounded-md hover:bg-blue-600">Send Message</button>
                </form>
            </div>
            </div>
           
        </div>
    );
}