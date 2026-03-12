import Image from "next/image";


export default function ImageSection() {
  return (
    
    <div className="relative p-8">
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 relative z-10">
          <div className="relative overflow-hidden rounded-xl shadow-lg h-54 mt-4">
            <Image
              src="/Image_5.webp"
              alt="Interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-lg h-64">
            <Image
              src="/Buy-Compact-Wooden-Dining-table-with-1-Bench-3-chairs-furniture-set-for-modern-Home_1200x.jpg"
              alt="Kitchen"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />

          </div>
          
        </div>
          
      </div>
  
    </div>
    
  );
}