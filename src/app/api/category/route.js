import connectDB from "@/lib/connectDB";
import Category from "@/model/categoryModel";

import { NextResponse } from "next/server";

export async function POST(req, res) {
    await connectDB(); //open db connection
    const { title, imageUrl } = await req.json();

    if (!title || !imageUrl) {
        return NextResponse.json(
            { error: "All field is required" },
            { status: 401 }
        );
    }

    const category = new Category({
        title,
        imageUrl,
    });
    try {
        await category.save();
        return NextResponse.json({
            success: `category ${category.title} has been successfully created`,
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
    await connectDB(); //open db connection

    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        return NextResponse.json(
            {
                categories,
            },
            { status: 200 }
        );
    } catch (err) {
        console.log(err.message);
        return NextResponse.json(
            { error: "Something has happened" },
            { status: 500 }
        );
    }
}
