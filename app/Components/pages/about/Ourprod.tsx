export default function Ourprod() {
    const products = [
        "Sofa",
        "Sectional Sofa",
        "Recliner",
        "Armchair",
        "Coffee Table",
        "End Table",
        "TV Stand",
        "Bookshelf",
        "Console Table",
        "Ottoman"
    ]
    return (
        <>
            <div className="bg-gray-100 p-20 rounded-lg shadow-md text-center" >
                <h1 className="text-2xl font-bold text-gray-600 ">Our Products</h1>
                <p className="mt-4 text-xl text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, unde hic recusandae quas obcaecati reiciendis officiis? Reprehenderit autem saepe quam quod perferendis, quas mollitia sed iure neque fugiat at optio.</p>

                <div className="grid md:grid-cols-4">
                    {
                        products.map((item, index) => ((
                            <div className="border bg-gray-400 shadow-lg flex items-center justify-center border-gray-300 w-54 h-20 pt-5 rounded-xl  mb-6 group-hover:scale-110 transition-transform mt-5 ">
                                <div key={index} className="border bg-white shadow-lg flex items-center justify-center border-gray-300 w-50 h-20 rounded-xl  mb-6 group-hover:scale-110 transition-transform mt-5">
                                    <h1 className="text-xl text-gray-500 font-bold">{item}</h1>
                                </div>
                            </div>
                        )))
                    }

                </div>
                    <div>
                        <div className="grid md:grid-cols-2 p-20 gap-10">
                            <div className="bg-gray-950 p-10 rounded-lg text-gray-200 h-96 group-hover:scale-110 transition-transform">
                                <h1 className="text-2xl font-bold">Our Mission</h1>
                                <p className="text-justify text-xl space-y-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque exercitationem fugit odit similique ad iste tempora necessitatibus temporibus sed vitae fugiat repellendus aut a quod iusto error, vero facilis suscipit? Qui cupiditate, corporis nisi porro ea, perferendis, nemo debitis rerum expedita laudantium repudiandae voluptas iusto. Beatae alias voluptas nostrum unde dignissimos tempora saepe a! Minima suscipit commodi dolorum impedit.</p>
                            </div>
                             <div className="bg-gray-600 p-10 rounded-lg text-gray-200 h-96 group-hover:scale-110 transition-transform">
                                <h1 className="text-2xl font-bold">Our Vision</h1>
                                <p className="text-justify text-xl space-y-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque exercitationem fugit odit similique ad iste tempora necessitatibus temporibus sed vitae fugiat repellendus aut a quod iusto error, vero facilis suscipit? Qui cupiditate, corporis nisi porro ea, perferendis, nemo debitis rerum expedita laudantium repudiandae voluptas iusto. Beatae alias voluptas nostrum unde dignissimos tempora saepe a! Minima suscipit commodi dolorum impedit.</p>
                            </div>
                        </div>
                    </div>
            </div>

        </>
    );
}