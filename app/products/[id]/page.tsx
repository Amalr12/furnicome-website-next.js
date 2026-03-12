import ProductIdHero from "@/app/Components/pages/Product_id/Productid-hero";
import { productData } from "@/data/each-prod-details";

import { notFound, redirect } from "next/navigation";

interface ProductHero {
  params: Promise<{
    id: string;
    title: string;
    description: string;
    mainImage: string;
  }>;
}

const urlAliases: Record<string, string> = {
  'wood-veneers': 'veneers',
  'laminates-board': 'laminates',
  'fluted-wall-panels': 'fluted-panels',
  'premium-laminates': 'laminates',
  'wooden-veneers': 'veneers',
};

export default async function ProductPage({ params }: ProductHero ) {
    const { id } =await  params;
     if (urlAliases[id]) {
    redirect(`/products/${urlAliases[id]}`);
  }

  if (!productData[id]) {
    notFound();
  }

  const product = productData[id];
    return (
        <div className="bg-gray-100 h-full">
           
            {/* You can fetch and display product details based on the ID here */}

            <ProductIdHero {...product} />
        </div>
    );

}
    export function generateStaticParams() {
  const realIds = Object.keys(productData);
  const aliasIds = Object.keys(urlAliases);

  return [...realIds, ...aliasIds].map((id) => ({
    id,
  }));}