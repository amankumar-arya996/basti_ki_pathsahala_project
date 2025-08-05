const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// In-memory storage for submissions
let applicants = [];
const ADMIN_PASSWORD = "admin123"; // change as needed

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const { name, email, phone, college, year, reason } = req.body;
  applicants.push({ name, email, phone, college, year, reason });
  res.render("success", { name });
});

app.get("/admin", (req, res) => {
  const { password } = req.query;
  if (password === ADMIN_PASSWORD) {
    res.render("admin", { applicants });
  } else {
    res.render("unauthorized");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
