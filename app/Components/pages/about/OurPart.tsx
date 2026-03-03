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

                <marquee behavior="scroll" direction="left" scrollamount="5">
      <div className="flex items-center gap-16 p-10">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="h-12 w-auto"
          />
        ))}
      </div>
    </marquee>
            </div>
        </>
    );
}
