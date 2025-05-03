import Image from 'next/image';

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: "$29.99",
      category: "Casual",
      image: "/images/7.jpeg",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "$89.99",
      category: "Outerwear",
      image: "/images/4.jpeg",
    },
    {
      id: 3,
      name: "Summer Dress",
      price: "$59.99",
      category: "Dresses",
      image: "/images/7.jpeg",
    },
    {
      id: 4,
      name: "Slim Fit Jeans",
      price: "$69.99",
      category: "Pants",
      image: "/images/6.jpeg",
    },
  ];

  return (
    <section id="products" className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-500">
          Featured Products
        </h2>
        <p className="text-black text-center mb-12 max-w-2xl mx-auto">
          Discover our selection of trending items curated for your style
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-300 transform hover:scale-105 rounded-t-lg"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         25vw"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-indigo-600 font-medium">{product.category}</span>
                <h3 className="text-lg font-semibold mt-1 text-gray-900 dark:text-white">{product.name}</h3>
                <p className="text-gray-black font-bold mt-1">{product.price}</p>
                <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#register"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition duration-300"
          >
            Register for Our Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
