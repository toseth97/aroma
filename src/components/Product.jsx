"use client";
import React from "react";
import { useContext } from "react";
import ProductContext from "@/context/ProductContext";
import ProductCard from "./ProductCard";

const Product = () => {
    const { products } = useContext(ProductContext);
    const cat = [
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
        "decoration",
    ];
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full shop__hero flex flex-col items-center justify-center">
                <h1 className="text-4xl title__text font-bold mb-2">
                    Shop Category
                </h1>
                <p className="opacity-60 text-sm">Home - Shop category</p>
            </div>
            <div className="lg:w-10/12 w-11/12 bg-white py-16 lg:px-8 px-2 flex lg:flex-row items-start flex-col gap-8">
                <div className="lg:w-3/12 w-full gap-8 flex flex-col items-center justify-center lg:sticky relative top-[80px]">
                    <div className=" w-full flex flex-col items-center justify-center px-2">
                        <div className="productNav w-full  pb-8 flex flex-col items-center justify-center">
                            <h1 className=" productNav__title w-full text-white title__text flex items-center justify-center mb-8">
                                Product Search
                            </h1>
                            <input
                                type="text"
                                placeholder="Search"
                                className="inline-block w-11/12 py-1 px-2 text-sm outline-none opacity-70"
                            />
                            <div className="px-8"></div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col items-center justify-center px-2">
                        <div className="productNav w-full  pb-8">
                            <h1 className=" productNav__title w-full text-white title__text flex items-center justify-center mb-8">
                                Browse Categories
                            </h1>
                            <div className="px-8">
                                {cat.map((item) => (
                                    <div
                                        key={item}
                                        className="w-11/12 flex gap-4 my-1 "
                                    >
                                        <input
                                            type="radio"
                                            name="category"
                                            value={item}
                                            key={item}
                                            id={item}
                                            className="catInput"
                                        />
                                        <label
                                            htmlFor={item}
                                            className="opacity-70"
                                        >
                                            {item}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-8/12 w-full flex flex-wrap lg:mt-0 mt-16 border-t">
                    {products ? (
                        products.map((item) => (
                            <ProductCard item={item} key={item.id} />
                        ))
                    ) : (
                        <div className="loading__screen h-52 flex items-center justify-center w-full">
                            <div className="loading"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
