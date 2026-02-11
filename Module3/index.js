const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Express App!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<p>This is a simple Express application for learning purposes.</p>");
});

app.get("/contact", (req, res) => {
  const { name, email, message } = req.query;

  if (name && email && message) {
    res.send(`
      <h2>Thank you, ${name}!</h2>
      <p>We have received your message: ${message}</p>
    `);
  } else {
    res.send(`
      <h2>Contact Us</h2>
      <form method="GET" action="/contact">
        <label>Name:</label><br>
        <input type="text" name="name" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Other form of contact / Message:</label><br>
        <textarea name="message" required></textarea><br><br>

        <button type="submit">Submit</button>
      </form>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
