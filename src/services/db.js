import mongoose from "mongoose";
import Config from "../config";

export const connectDb = () => {
  return mongoose.connect(
    "mongodb+srv://admin:Vale7220@cluster0.cyate.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
};
