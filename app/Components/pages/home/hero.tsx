export default function Hero() {
    return(
        <div className="flex min-h-screen items-center justify-center  font-sans dark:bg-black" style={{backgroundImage:"url('/664917787afa0ee184f6060d_39 Medea 6 (1)-min.webp')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-black/20">
              <main className="flex min-h-screen w-full flex-col md:items-center  justify-center   dark:bg-black sm:items-start">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl">
                    Furnicome <span  className="text-blue-600">Furnitures</span>
                </h1>
                {/* <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                    Get started by editing <code className="rounded-md bg-gray-100 p-3 font-mono text-sm">app/page.tsx</code>
                </p> */}
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl mb-20">Elegant Furniture for Every Home</h1>
            </main></div>
            
        </div>
    );
}