export default function ProductsHero() {
    return (
      <div className="bg-gray-600 text-gray-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">Discover Our Products</h1>
          <p className="text-lg text-gray-400 mb-8">Explore our wide range of furniture and home decor items.</p>
          <a href="/products" className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300">Shop Now</a>
        </div>
      </div>
    );
}