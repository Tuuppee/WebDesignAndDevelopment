import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Hello from Express.");
});

app.get("/welcome", async (req, res) => {
  res.status(200).json({
    message: "Handshake from express.",
  });
});
