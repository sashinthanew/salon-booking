import React from "react";

function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-12 mb-24 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-pink-600 mb-6 text-center">
        Get in Touch
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Have questions or want to book an appointment? We're here to help!
        Reach out to us anytime.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-pink-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-pink-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-pink-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-pink-600 text-white font-bold py-3 px-6 rounded-md hover:bg-pink-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-gray-600">
        <p><strong>Phone:</strong> +94 77 123 4567</p>
        <p><strong>Email:</strong> contact@barberceylon.lk</p>
        <p><strong>Address:</strong> 123 Barber Street, Colombo, Sri Lanka</p>
      </div>
    </div>
  );
}

export default Contact;
