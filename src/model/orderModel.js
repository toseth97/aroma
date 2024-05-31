import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    products: [
        {
            product: { type: mongoose.Types.ObjectId, ref: "Product" },
            quantity: { type: Number, required: true },
        },
    ],
    total: { type: Number, required: true },
    status: { type: String, enum: ["pending", "shipped", "delivered"] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
