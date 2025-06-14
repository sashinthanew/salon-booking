import React from "react";

function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-12 mb-24 bg-white rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold text-pink-600 mb-6 text-center">
        About Barber Ceylon
      </h1>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
        At Barber Ceylon, we believe grooming is an art. With over a decade of
        experience in the barbering industry, we provide premium haircuts,
        beard grooming, and styling services tailored to your unique personality.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src="/saloon.jpg"
          alt="Barber shop"
          className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
        />
        <div>
          <h2 className="text-3xl font-semibold text-pink-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            To provide a welcoming and stylish space where everyone can feel
            confident and look their best. We use only the highest quality
            products and techniques, ensuring each visit is a luxurious
            experience.
          </p>

          <h2 className="text-3xl font-semibold text-pink-600 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Experienced barbers with personalized service</li>
            <li>Hygienic and relaxing environment</li>
            <li>Affordable pricing with premium quality</li>
            <li>Flexible booking and friendly customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
