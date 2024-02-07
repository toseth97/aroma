"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { getProduct } from "@/lib/product";

const TrendingProduct = ({ product, text }) => {
    console.log(product);
    return (
        <div className="flex flex-col i justify-center lg:w-9/12 w-11/12 mt-16 pt-8">
            <p className="opacity-70">Popular Item in the market</p>
            <div className="relative lg:w-5/12 w-full">
                <h2 className="text-4xl font-bold my-2 title__text ">{text}</h2>
                <div className="u__line mb-8"></div>
            </div>
            <div className="flex lg:flex-row flex-col gap-2 w-full ">
                {product ? (
                    product.map((item) => (
                        <ProductCard item={item} key={item.id} />
                    ))
                ) : (
                    <div className="loading__screen h-52 flex items-center justify-center">
                        <div className="loading"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrendingProduct;
