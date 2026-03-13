export default function Hero() {
    return(
        <div className="flex min-h-[70vh] md:min-h-screen md:items-center md:justify-center  font-sans dark:bg-black/20 pt-10 md:pt-0 " style={{backgroundImage:"url('/664917787afa0ee184f6060d_39 Medea 6 (1)-min.webp')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="min-h-[60vh]  inset-0 ">
              <main className="flex  w-full flex-col md:items-center items-center ps-2  justify-center   dark:bg-black sm:justify-center pt-15 ">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-6xl  text-center pt-0 ">
                    Furnicome <span  className="text-blue-600">Furnitures</span>
                </h1>
                {/* <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                    Get started by editing <code className="rounded-md bg-gray-100 p-3 font-mono text-sm">app/page.tsx</code>
                </p> */}
                <h1 className="text-lg font-bold text-gray-900 dark:text-white sm:text-3xl mb-10 text-center">Elegant Furniture for Every Home</h1>
            </main></div>
            
        </div>
    );
}