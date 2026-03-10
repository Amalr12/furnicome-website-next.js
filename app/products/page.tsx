import ExploreCollection from "../Components/pages/products/explore-all-prod";
import FeaturedProducts from "../Components/pages/products/featured-products";
import { HomeProducts } from "../Components/pages/products/home-products";
import ProdFeatCard from "../Components/pages/products/prod-feat-card";
import ProductsHero from "../Components/pages/products/products-hero";

export default function Products() {
    return (
      <div className="bg-gray-100 h-full">
       <ProductsHero />
       <HomeProducts />
        <FeaturedProducts title="Featured Products" description="Discover our latest collection of high-quality furniture and home decor items." image="/images/featured-prod.jpg" category="featured" />
        <ExploreCollection/>
       

      </div>
    );
}