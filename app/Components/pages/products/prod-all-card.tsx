import Link from "next/link";

interface ProdFeatCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
  category: string;
}
export default function ProdAllCard({ title, image, description, link, category }: ProdFeatCardProps) {

    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
           <Link  href={link}>
                <img src={image} alt={title} className="w-full  object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
           </Link>
        </div>
    );
}