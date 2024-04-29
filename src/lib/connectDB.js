import mongoose from "mongoose";

async function connectDB() {
    try {
        if (mongoose.connection.readyState === 1) {
            return mongoose.connection.asPromise();
        }
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

export default connectDB;
