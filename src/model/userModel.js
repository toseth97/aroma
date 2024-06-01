import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    address: String,
    wallet: Number,
});

const User =
    mongoose.model.User ||
    mongoose.model("User", userSchema, { override: false });

export default User;
