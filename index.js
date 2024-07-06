const express = require("express");
const errorMiddleware = require("./middleware/error");
const validationMiddleware = require("./middleware/validationHnadling");

const app = express();

app.use(express.json());

app.post("/register", validationMiddleware, (req, res) => {
  res.status(200).json({ message: "User registered successfully!" });
});

app.use(errorMiddleware);

const port = 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
