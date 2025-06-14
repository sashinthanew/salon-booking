function Services() {
  const services = [
    {
      name: "Classic Haircut",
      description:
        "Get a timeless, clean, and sharp haircut from our expert barbers tailored to your style.",
      price: "Rs. 1200",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Beard Grooming",
      description:
        "Shape, trim, and condition your beard to look neat and stylish with our premium grooming service.",
      price: "Rs. 800",
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Hot Towel Shave",
      description:
        "Enjoy a relaxing hot towel shave for the smoothest, cleanest finish and ultimate comfort.",
      price: "Rs. 1500",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Hair Coloring",
      description:
        "Add a splash of color or cover grays with professional hair coloring that suits your personality.",
      price: "Rs. 2500",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Facial Treatment",
      description:
        "Rejuvenate your skin with a deep cleansing facial tailored to your skin type and needs.",
      price: "Rs. 2000",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-4">
          Our Premium Services
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          At Barber Ceylon, we deliver top-notch grooming experiences tailored to your unique style. Explore our wide range of services designed to keep you looking sharp and feeling confident.
        </p>
      </header>

      {/* Services Grid */}
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={service.image}
              alt={service.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-pink-600">
                {service.name}
              </h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  {service.price}
                </span>
                <a
                  href="/book"
                  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Services;
