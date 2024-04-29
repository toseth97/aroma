import connectDB from "@/lib/connectDB";
import Product from "@/model/productModels";
import Category from "@/model/categoryModel";

import { NextResponse } from "next/server";

export async function POST(req, res) {
    await connectDB(); //open db connection
    const { title, description, imageUrl, price, category } = await req.json();

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

export async function GET(req, res) {
    await connectDB();
    try {
        const product = await Product.find().populate("category");

        return NextResponse.json(product, { status: 200 });
    } catch (err) {
        console.log(err.message);
        return NextResponse.json(
            { error: "Something has happened" },
            { status: 500 }
        );
    }
}
