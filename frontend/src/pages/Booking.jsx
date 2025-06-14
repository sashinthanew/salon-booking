import React, { useState } from "react";
import axios from "axios";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.service) newErrors.service = "Service is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post("http://localhost:5000/api/bookings", {
        userEmail: formData.email, // ✅ Match backend
        service: formData.service,
        date: formData.date,
        time: formData.time,
      });

      console.log("Booking successful:", res.data);
      setSubmitted(true);
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Book Your Appointment
        </h2>

        {submitted ? (
          <div className="text-green-600 text-center font-semibold text-lg">
            Booking Successful! 🎉
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg px-3 py-2 shadow-sm focus:ring focus:ring-indigo-200"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg px-3 py-2 shadow-sm focus:ring focus:ring-indigo-200"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg px-3 py-2 shadow-sm focus:ring focus:ring-indigo-200"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg px-3 py-2 shadow-sm focus:ring focus:ring-indigo-200"
              >
                <option value="">Select a service</option>
                <option value="Classic Haircut">Classic Haircut</option>
                <option value="Beard Trim">Beard Trim</option>
                <option value="Hair Coloring">Hair Coloring</option>
                <option value="Facial Treatment">Facial Treatment</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm">{errors.service}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg px-3 py-2 shadow-sm focus:ring focus:ring-indigo-200"
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-lg px-3 py-2 shadow-sm focus:ring focus:ring-indigo-200"
              />
              {errors.time && (
                <p className="text-red-500 text-sm">{errors.time}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-200"
            >
              Book Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Booking;
