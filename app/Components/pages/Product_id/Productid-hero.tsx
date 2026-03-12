import { ProductDetail } from "@/data/each-prod-details";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

interface ProductHeroSectionProps extends ProductDetail {}

export default function ProductIdHero({ title,description,mainImage }: ProductHeroSectionProps) {
    return (
        <section className="product-hero-bg pt-24 pb-0 md:pt-16 md:pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-8 ">
          <div>
            <Link
              href="/products"
              className="product-back-link mb-6 md:mb-8 md:text-base"
            >
              <BsArrowLeft className="h-2 w-2 md:h-4 md:w-4 mr-1 md:mr-2 text-2xl" />
              Back to Products
            </Link>

            <h1 className="product-hero-title mb-3 md:mb-4 mt-0 md:mt-24 md:text-[48px] md:leading-14">
              {title}
            </h1>

            <p className="product-hero-description md:max-w-xl  ">
              {description}
            </p>
          </div>

          <div className="relative w-full  md:h-100 sm:h-80 h-60">
            <Image
              src={mainImage}
              alt={title}
              fill
              className=""
            />
          </div>
        </div>

      </div>
    </section>
    );
}