import React, { useState, useEffect } from "react";
import axios from "axios";

function MyBookings({ user }) {
  const [list, setList] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/bookings/user/${user.email}`);
      setList(res.data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  const updateTime = async (id) => {
    const newTime = prompt("Enter new time (e.g., 3:00 PM):");
    if (!newTime) return;
    try {
      await axios.put(`http://localhost:5000/api/bookings/${id}`, { time: newTime });
      fetchBookings();
    } catch (err) {
      console.error("Error updating time:", err);
    }
  };

  const removeBooking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      fetchBookings();
    } catch (err) {
      console.error("Error deleting booking:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [user.email]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      {list.length === 0 && <p>You have no bookings yet.</p>}
      {list.map(({ _id, service, date, time, status }) => (
        <div key={_id} className="mb-4 p-4 bg-gray-50 rounded shadow">
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
          <div className="mt-2 flex gap-2">
            <button onClick={() => updateTime(_id)} className="btn-edit">
              Edit Time
            </button>
            <button onClick={() => removeBooking(_id)} className="btn-delete">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
