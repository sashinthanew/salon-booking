import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all bookings from backend
  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");
      setBookings(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Update booking status: confirm or reject
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/bookings/status/${id}`, { status });
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status } : b))
      );
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Bookings</h2>
      <ul className="space-y-4">
        {bookings.map(({ _id, service, date, time, userEmail, status }) => (
          <li key={_id} className="border p-4 rounded shadow">
            <p><strong>User:</strong> {userEmail}</p>
            <p><strong>Service:</strong> {service}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  status === "confirmed"
                    ? "text-green-600"
                    : status === "rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }
              >
                {status}
              </span>
            </p>
            {status === "pending" && (
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => updateStatus(_id, "confirmed")}
                  className="btn-confirm"
                >
                  Confirm
                </button>
                <button
                  onClick={() => updateStatus(_id, "rejected")}
                  className="btn-reject"
                >
                  Reject
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
