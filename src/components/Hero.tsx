import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text content */}
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Discover Your Style
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore our collection of fashionable clothes that express your unique personality.
          </p>
          <a
            href="#register"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Register Now
          </a>
        </div>

        {/* Hero image */}
        <div className="w-full md:w-1/2 h-64">
          <Image
            src="/images/2.jpeg"
            alt="Hero"
            width={500}
            height={300}
            className="rounded-lg shadow-inner object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
