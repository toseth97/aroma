"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getProduct } from "@/lib/product";

const TrendingProduct = ({ product }) => {
    console.log(product);
    return (
        <div className="flex flex-col i justify-center lg:w-9/12 w-11/12 mt-16 pt-8">
            <p className="opacity-70">Popular Item in the market</p>
            <div className="relative lg:w-5/12 w-full">
                <h2 className="text-4xl font-bold my-2 title__text ">
                    Trending Product
                </h2>
                <div className="u__line mb-8"></div>
            </div>
            <div className="flex lg:flex-row flex-col gap-2">
                {product &&
                    product.map((item) => (
                        <div
                            key={item.id}
                            className="text-center w-full cursor-pointer p-4 product__card"
                        >
                            <div className="w-full flex flex-col items-center ">
                                <Image
                                    src={item.images[0]}
                                    alt="item.title"
                                    width={250}
                                    height={300}
                                />
                            </div>
                            <p className="h-8 mt-4 opacity-70">
                                {item.category.name}
                            </p>
                            <h3 className="title__text text-xl lg:h-16 h-8 blue__text">
                                {item.title}
                            </h3>
                            <p className=" opacity-70 font-bold">
                                $ {item.price}.00
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TrendingProduct;
