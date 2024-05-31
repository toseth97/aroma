import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema(
    {
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        title: { type: String, required: true },
        price: { type: String, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
        stockCount: { type: Number, required: true },
        ratings: [
            {
                rating: { type: Number, required: true }, // rating value (e.g. 1-5)
                comment: { type: String }, // optional comment
                userId: { type: Schema.Types.ObjectId, ref: "User" }, // user who left the rating
                createdAt: { type: Date, default: Date.now }, // timestamp
            },
        ],
    },
    { timestamps: true }
);

const Product =
    mongoose.model.Product || mongoose.model("Product", productSchema);

export default Product;
