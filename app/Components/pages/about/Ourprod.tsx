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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    {
                        products.map((item, index) => ((
                            <div key={index} className="border bg-gray-400 shadow-lg flex items-center justify-center border-gray-300 w-54 h-20 pt-5 rounded-xl  mb-6 group-hover:scale-110 transition-transform mt-5 ">
                                <div className="border bg-white shadow-lg flex items-center justify-center border-gray-300 w-50 h-20 rounded-xl  mb-6 group-hover:scale-110 transition-transform mt-5">
                                    <h1 className="text-xl text-gray-500 font-bold">{item}</h1>
                                </div>
                            </div>
                        )))
                    }

                </div>

                <div className="grid md:grid-cols-2 gap-4 relative pt-5 ">

                    <div className="bg-gray-900 text-white md:p-6 p-2 rounded-lg ">

                        <h2 className="text-2xl font-bold mb-4 text-center">
                            Our Mission
                        </h2>

                        <p className="text-sm  flex text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iure, eaque exercitationem fugit odit similique ad iste
                            tempora necessitatibus temporibus odit similique ad iste
                            tempora necessitatibus.
                        </p>

                    </div>
<div className="bg-gray-900 text-white md:p-6 p-2 rounded-lg ">

                        <h2 className="text-2xl font-bold mb-4 text-center">
                            Our Mission
                        </h2>

                        <p className="text-sm   flex text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iure, eaque exercitationem fugit odit similique ad iste
                            tempora necessitatibus temporibus odit similique ad iste
                            tempora necessitatibus.
                        </p>

                    </div>


                </div>

            </div>

        </>
    );
}