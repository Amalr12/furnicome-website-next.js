import Link from "next/link";
import ImageSection from "./ImageSection";
import Features from "./Features";

export default function AboutHero() {
    return (
        <div  className="py-24 relative"
      style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <div className="space-y-6">

            <span
              className="uppercase tracking-[0.7px] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-5"
              style={{ 
                color: 'var(--nuhome-gold)',
                fontWeight: 'var(--font-weight-normal)' 
              }}
            >
              About Us
            </span>


            <h2
              className="text-[28px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-black leading-none  mt-2 font-medium" 
            >
              Welcome to <br /> Furnicome Furnitures
            </h2>

            <p
              className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-normal text-justify"
              style={{ 
                color: 'var(--foreground)', 
                fontWeight: 'var(--font-weight-normal)' 
              }}
            >
             Furnicome Furnitures is a modern furniture brand offering stylish, comfortable, and affordable home and office furniture. We focus on quality craftsmanship, elegant designs, and durable materials to create pieces that enhance both functionality and aesthetics. From sofas and dining sets to storage and décor solutions, Furnicome brings comfort and sophistication to every space.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center group md:mt-10">

              <span 
                className=" text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl  font-medium"
               
              >Learn More About Us</span>

              

            </Link>

          </div>
          <ImageSection />
      

          
          
        </div>
            <Features />
      </div>

        </div>
    );
}