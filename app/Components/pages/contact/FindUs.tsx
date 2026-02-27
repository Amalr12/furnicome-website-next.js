import Image from "next/image";

export default function FindUs(){
    return(
        <>
        <div className="text-center ">
            <h1 className="text-4xl font-bold">Find Us</h1>
            <p>Our office is located at 123 Main Street, Cityville.</p>
            <div className="mt-4 grid grid-cols-2 p-5 gap-4">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184519950787!2d-73.9875762!3d40.7580246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1649666666666!5m2!1sen!2sus" width="500" height="450" className="border-0 rounded-lg w-full h-full"></iframe>
    
                </div>
                <div>
                    <Image src="/2-3.webp" alt="Map" width={500} height={450} className="border-0 rounded-lg w-full h-full" />
                </div>
                
            </div>
        </div>
        </>
    );
}