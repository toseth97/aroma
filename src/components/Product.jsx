"use client";
import React from "react";
import { useContext } from "react";
import ProductContext from "@/context/ProductContext";
import ProductCard from "./ProductCard";
import { FaLongArrowAltRight } from "react-icons/fa";

const Product = () => {
    const { products, productFilterBtn, setProductFilterBtn } =
        useContext(ProductContext);

    const cat = [
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
        "decoration",
    ];

    const filterDisplay = () => {
        setProductFilterBtn(!productFilterBtn);
    };
    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <div className="w-full shop__hero flex flex-col items-center justify-center">
                <h1 className="text-4xl title__text font-bold mb-2">
                    Shop Category
                </h1>
                <p className="opacity-60 text-sm">Home - Shop category</p>
            </div>
            <div className="w-full sticky left-0 top-24 lg:hidden block z-20  mt-8 mb-3 ">
                <p
                    className="p-3 w-[50px] h-[50px] border border-gray-500 rounded bg-white ml-4"
                    onClick={filterDisplay}
                >
                    <FaLongArrowAltRight
                        style={{}}
                        className="text-blue-700 text-3xl "
                    />
                </p>
                <div
                    className={`lg:w-3/12 w-9/12 gap-8 flex flex-col items-center justify-center lg:sticky absolute ease-in-out duration-300 lg:left-0  left-[-100%] lg:top-[80px] mt-4 ${
                        productFilterBtn ? "left-2 bg-white py-8 px-2" : null
                    } z-10`}
                >
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
                                    <p key={item} className="my-1 py-1">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-10/12 w-11/12 bg-white lg:py-16 py-4 lg:px-8 px-2 flex items-start gap-8 z-10 relative">
                <div
                    className={`lg:w-3/12 w-9/12 gap-8 flex flex-col items-center justify-center sticky lg:top-[80px] lg:block hidden z-10`}
                >
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
                                    <p key={item} className="my-1 py-1">
                                        {item}
                                    </p>
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
