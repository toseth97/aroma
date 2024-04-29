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
    },
    { timestamps: true }
);

const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
