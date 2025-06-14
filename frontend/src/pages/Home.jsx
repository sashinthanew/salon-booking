import { useNavigate } from "react-router-dom";

function Home({ user }) {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/services");
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/back2.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Barber Ceylon</h1>
          <p className="text-xl mb-6">
            Experience beauty like never before. Book your appointment today and indulge yourself.
          </p>
          <button
            onClick={handleBookNowClick}
            className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded text-lg font-semibold"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Popular Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Haircut",
              description: "Get the latest trendy haircut from our experts.",
              image: "/saloon.jpg",
            },
            {
              name: "Facial",
              description: "Rejuvenate your skin with our relaxing facial treatments.",
              image: "/facial.jpg",
            },
            {
              name: "Manicure",
              description: "Pamper your hands and nails with our manicure services.",
              image: "/manicure.jpg",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={handleBookNowClick}
                  className="text-pink-600 font-semibold hover:underline bg-transparent border-none cursor-pointer"
                >
                  Book Now &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/aboutat.jpg"
              alt="About Barber Ceylon"
              className="rounded-lg shadow-md w-full object-cover h-96"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-pink-600">About Barber Ceylon</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              At Barber Ceylon, we believe in celebrating beauty, confidence, and self-care.
              Our experienced professionals are dedicated to providing top-notch salon services
              in a relaxing and welcoming environment. From trendy haircuts to luxurious facials
              and nail treatments, every service is designed to make you feel and look your best.
            </p>
            <p className="text-gray-600 mb-6">
              Discover your perfect style and indulge in a blissful beauty experience with us.
              We’re passionate about making every visit special for you.
            </p>
            <button
              onClick={handleBookNowClick}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded transition duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
