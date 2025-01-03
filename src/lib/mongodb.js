import mongoose from "mongoose";

const connectDB = async () => {
  console.log("DB CON STATUS: ---> ", mongoose.connection);
  try {
    if (mongoose.connection?.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
