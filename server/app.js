// index.js
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// 1) SMTP TRANSPORTER
// TODO: CHANGE THESE VALUES to your provider's SMTP details.
// Example for Brevo (Sendinblue):
// host: "smtp-relay.brevo.com", port: 587, secure: false
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",   // e.g. "smtp-relay.brevo.com"
  port: 587,                     // or 465 for secure, or as your provider says
  secure: false,                 // true if you use port 465
  auth: {
    user: "9dc68f001@smtp-brevo.com",
    pass: "np8Brgd6jUxOaLcN",
  },
});

// Simple health check
app.get("/", (req, res) => {
  res.send("BIACSYS backend is running");
});

// 2) CONTACT FORM API
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    await transporter.sendMail({
  from: '"BIACSYS" <biacsys74@gmail.com>',
  to: "biacsys74@gmail.com",
  subject: subject || `New enquiry from ${name}`,
  text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
});


    res.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false, error: "Email failed" });
  }
});

// 3) START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
