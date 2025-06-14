function Dashboard() {
  const bookings = [
    { service: "Haircut", date: "2025-06-10", time: "10:00 AM" },
    { service: "Facial", date: "2025-06-12", time: "2:00 PM" }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      <ul className="space-y-2">
        {bookings.map((b, i) => (
          <li key={i} className="border p-4 rounded shadow">
            <p><strong>Service:</strong> {b.service}</p>
            <p><strong>Date:</strong> {b.date}</p>
            <p><strong>Time:</strong> {b.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;