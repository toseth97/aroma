import connectDB from "@/lib/connectDB";
import { Product, Category } from "@/model/productModels";
import data from "@/model/test";
import { NextResponse } from "next/server";

async function load(item) {
    const { title, description, imageUrl, price, category } = item;

    if (!title || !description || !imageUrl || !price || !category) {
        return NextResponse.json(
            { error: "All field is required" },
            { status: 401 }
        );
    }

    const productCategory = await Category.findOne({ title: category });
    console.log(productCategory);
    const product = new Product({
        title,
        description,
        imageUrl,
        price,
        category: productCategory._id,
    });
    try {
        await product.save();
        return NextResponse.json({
            success: `Product ${product.title} created successfully.`,
        });
    } catch (err) {
        console.log(err.message);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 401 }
        );
    }
}

export async function POST(req, res) {
    await connectDB(); //open db connection
    // data.forEach((item) => load(item));
}
