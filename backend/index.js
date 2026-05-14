import express from "express";
import connectDB from "./config/db.js";
//import userRouter from "./routes/UserRoute.js";

const app = express();
//app.use(express.json());
//app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log("Hello from Express.");
  connectDB();
});

app.get("/welcome", async (req, res) => {
  res.status(200).json({
    message: "Handshake from express.",
  });
});
