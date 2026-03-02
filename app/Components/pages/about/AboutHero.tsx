export default function AboutHero() {
    return(
        <>
             <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl">
                    About Us
                </h1>
                <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                    Learn more about our company and mission.
                </p>
            </main>
        </div>
        </>
       
    );
}