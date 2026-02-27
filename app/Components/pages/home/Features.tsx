import { describe } from "node:test";
import { GrStatusGood } from "react-icons/gr";

export default function Features() {

    const features = [
        {
            title: "Premium Quality",
            description: "Curated furniture crafted with superior materials for lasting durability and elegance."
        },
        {
            title: "Modern Designs",
            description: "Stylish and contemporary pieces that perfectly complement today’s living spaces"
        },
        {
            title: "Trusted Brands",
            description: "Carefully selected collections from reliable and renowned furniture makers."
        },
        {
            title: "Comfort First",
            description: "Designed for comfort and well-being, ensuring every piece enhances your daily life."
        }



    ]
    return (
        <div>
          
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8  ">

                {
                    features.map((item, index) => ((
                        <div key={index} className="group text-center">

                       
                        <div className="text-center border bg-gray-200 shadow-lg border-gray-300 w-50 h-50 rounded-xl  mb-6 group-hover:scale-110 transition-transform mt-5">
                            <GrStatusGood className="text-4xl text-green-500 m-auto mt-5"/>
                            <div className="space-y-2"> 
                            <h1 className="text-xl font-bold">{item.title}</h1>
                            <h1 className="text-sm text-gray-600">{item.description}</h1>

                        </div>
                        </div>
                        
                         </div>
                    )))
                }

            </div>
        </div>
    );
}
