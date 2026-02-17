const express = require("express");
const app = express();
const PORT = 3000;

// Homepage with navigation buttons
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to My Express App!</h1>

    <div style="margin-top:20px;">
      <a href="/about">
        <button>About</button>
      </a>

      <a href="/contact">
        <button>Contact</button>
      </a>

      <a href="/hello">
        <button>New Feature</button>
      </a>
    </div>
  `);
});

// About page
app.get("/about", (req, res) => {
  res.send(`
    <h2>About This Application</h2>
    <p>This is a simple Express application for learning purposes.</p>
    <a href="/"><button>Back to Home</button></a>
  `);
});

// Contact page with form handling
app.get("/contact", (req, res) => {
  const { name, email, message } = req.query;

  if (name && email && message) {
    res.send(`
      <h2>Thank you, ${name}!</h2>
      <p>We have received your message: ${message}</p>
      <p>We will contact you at: ${email}</p>
      <a href="/"><button>Back to Home</button></a>
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

      <br>
      <a href="/"><button>Back to Home</button></a>
    `);
  }
});

// Assignment 4 Enhancement Route
app.get("/hello", (req, res) => {
  res.send(`
    <h2>Hello from the new Dev Branch enhancement!</h2>
    <a href="/"><button>Back to Home</button></a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
