// src/components/Features.tsx
export default function Features() {
    const features = [
      {
        title: "Premium Quality",
        description: "Our clothes are made from the highest quality materials for comfort and durability.",
        icon: "🌟",
      },
      {
        title: "Latest Trends",
        description: "Stay fashionable with our constantly updated collection following the latest trends.",
        icon: "✨",
      },
      {
        title: "Fast Shipping",
        description: "Get your favorite clothes delivered quickly to your doorstep.",
        icon: "🚚",
      },
      {
        title: "100% Satisfaction",
        description: "We guarantee your satisfaction with our easy return and exchange policy.",
        icon: "👍",
      },
    ];
  
    return (
      <section id="features" className="py-12 md:py-20 bg-gray-50 ">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14 text-blue-500">
  Why Choose Us
</h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-black">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }