import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./Route/book-route.js";
import cors from "cors";
import userRoute from "./Route/user-router.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4004;
const URI= process.env.MongoDBURI;

// connect to MongoDB
try{
 mongoose.connect(URI);
 console.log("Connected to MongoDB")
} catch(error){
  console.log("Error: ",error)
}

//defining Route
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})