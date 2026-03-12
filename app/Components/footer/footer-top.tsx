import Link from "next/link";
export default function FooterTop() {
    return (
      <footer className="bg-gray-800 ">
            <div>
                <div className="mx-auto px-4 flex flex-col items-center text-center 
                py-[12%] sm:py-[10%] md:py-[8%] lg:py-[7%] xl:py-[6%] 2xl:py-[4%]
                ">

                    <h1 className="text-[#C9A961] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-none ">
                        Ready to Transform Your Space?
                    </h1>

                    <p className="text-white text-[10px] sm:text-sm md:text-base xl:text-lg mt-6">
                        Visit our showroom or get in touch with our team for personalized guidance
                    </p>


                    <Link
                        href="/contact"
                        className="relative inline-block p-px rounded-[12.87px] bg-linear-to-r from-[#C9A961] to-[#0D5550] hover:from-[#ebc160] hover:to-[#136d67] transition-all duration-300 my-10">
                        <span className="
                            flex items-center justify-center 
                            w-50 h-10 
                            md:w-70 md:h-14 
                            text-xs sm:text-sm md:text-base xl:text-lg 
                            rounded-[12.87px] 
                            bg-gray-400 
                            text-white            
                            transition-all 
                            normal-case">
                            Contact Us
                        </span>
                    </Link>

                </div>
                <hr className=" w-[80%] mx-auto border-white/20 " />
            </div>
        </footer>
    );
}