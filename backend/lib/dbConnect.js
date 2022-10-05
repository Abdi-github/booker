import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect = () => {
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env"
    );
  }

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log("DB Connection Failed", error.message));
};

export default dbConnect;
