import { products } from "@/data/each-prod";
import ProdFeatCard from "./prod-feat-card";

export default function FeaturedProducts({title, description, image, category }: { title: string; description: string; image: string; category: string; }) {

    const featuredProd = products.filter(products=> products.featured==true).slice(0,3)
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden  m-3 p-10">
           
                <h2 className="featured-section-title mb-0 leading-none lg:mb-3 lg:text-[48px] mt-5" style={{ fontWeight: 400 }}>
           Featured Collections
          </h2>
             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 p-10">
            
                      {featuredProd.map((product) => (
                        <ProdFeatCard
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