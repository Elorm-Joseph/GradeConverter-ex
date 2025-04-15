const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("CGPA ↔ CWA Converter is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
