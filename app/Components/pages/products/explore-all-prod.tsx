import { products } from "@/data/each-prod";
import ProdAllCard from "./prod-all-card";

export default function ExploreCollection () {

    const allProducts=products
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden  m-3 p-10">
           
           
           <div className="mb-8 lg:mb-12 flex flex-col  ">
          <h2 className="featured-section-title mb-0 leading-none lg:mb-3 lg:text-[48px]" style={{ fontWeight: 400 }}>
            Explore Our Collection
          </h2>
          <p className="featured-section-description mt-3 lg:mt-6 lg:leading-6 text-[12px] lg:text-[18px]">
            Comprehensive range of premium interior products designed to elevate every space
          </p>
        </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 p-10">

          {allProducts.map((product) => (
            <ProdAllCard
              key={product.id}
              title={product.name}
              image={product.image}
              description={product.description}
              link={product.link}
              category={product.category}
            />
          ))}
        </div>
        </div>
    );
}