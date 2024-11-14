const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // You can change the port if needed

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, "src")));

// Route all requests to "index.html"
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
