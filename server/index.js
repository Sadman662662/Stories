import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import storiesRoute from "./routes/stories.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/stories", storiesRoute);

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL =
  "mongodb+srv://mernStack01:mernstack123@cluster0.srwlj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
  })
  .catch((error) => console.log(error.message));
