const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log("Server started", PORT);
  console.log(`http://localhost:${PORT}`);
});
