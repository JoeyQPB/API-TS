import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json);

app.get("/", (req, res) => {
  res.send("oi");
});

app.listen(Number(process.env.PORT), () => {
  console.log(`Server running and up at port: ${process.env.PORT}`);
});
