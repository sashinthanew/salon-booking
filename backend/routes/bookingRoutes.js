const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// POST: Create a new booking
router.post("/", async (req, res) => {
  try {
    const { userEmail, service, date, time } = req.body;

    if (!userEmail || !service || !date || !time) {
      return res.status(400).json({ error: "All booking fields are required" });
    }

    const newBooking = new Booking({
      userEmail,
      service,
      date,
      time,
      status: "pending",
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET: Get all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error("Fetch Booking Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT: Update booking status (Admin)
router.put("/status/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!status) {
      return res.status(400).json({ error: "Status field is required" });
    }

    const updated = await Booking.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) return res.status(404).json({ error: "Booking not found" });

    res.json(updated);
  } catch (error) {
    console.error("Status Update Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT: User updates booking
router.put("/:id", async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Booking not found" });

    res.json(updated);
  } catch (err) {
    console.error("Update Booking Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE: Delete booking
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Booking not found" });

    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    console.error("Delete Booking Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
