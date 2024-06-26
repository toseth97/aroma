"use client";

import { useContext } from "react";
import ProductContext from "@/context/ProductContext";
import ProductCard from "./ProductCard";

const TrendingProduct = ({ product, text }) => {
    const { trendingProduct } = useContext(ProductContext);

    return (
        <div className="flex flex-col justify-center lg:w-9/12 w-11/12 mt-4 pt-8">
            <p className="opacity-70">Popular Item in the market</p>
            <div className="relative lg:w-5/12 w-full">
                <h2 className="text-4xl font-bold my-2 title__text ">{text}</h2>
                <div className="u__line mb-8"></div>
            </div>
            <div className="w-full flex items-start  justify-evenly gap-1 ">
                {trendingProduct ? (
                    trendingProduct.map((item) => (
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
