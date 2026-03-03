import Marquee from "react-fast-marquee";

export default function OurPart() {
   const partners = [
  {
    name: "IKEA",
    logo: "/Ikea_logo.svg.png"
  },
  {
    name: "Ashley Furniture",
    logo: "/Ashley_logo_2022.svg.png"
  },
  {
    name: "Wayfair",
    logo: "/Wayfair_logo.svg.png"
  },
  {
    name: "Overstock",
    logo: "/Overstock.com_logo.svg.png"
  }
];
    return (
        <>
            <div className="bg-gray-100 p-20 rounded-lg shadow-md text-center" >
                <h1 className="text-2xl font-bold text-gray-600 ">Our Partners</h1>
                <p className="mt-4 text-xl text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde hic recusandae quas obcaecati reiciendis officiis? Reprehenderit autem saepe quam quod perferendis, quas mollitia sed iure neque fugiat at optio.</p>

                <div className="w-full my-10 mt-10">
      <Marquee  speed={50} gradient={false} className="flex flex-row items-center ">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="h-12 w-auto my-10 mx-10 object-contain"
          />
        ))}
      </Marquee>
    </div>
            </div>
        </>
    );
}
