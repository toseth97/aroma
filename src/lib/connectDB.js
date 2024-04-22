import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

export default connectDB;
