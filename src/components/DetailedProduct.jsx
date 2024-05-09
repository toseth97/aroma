"use client";
import React from "react";
import { useContext } from "react";
import ProductContext from "@/context/ProductContext";
import { useParams } from "next/navigation";

const DetailedProduct = () => {
    const { products } = useContext(ProductContext);
    const { Id } = useParams();
    const product =
        products && products.filter((items) => items.id == Number(Id));
    console.log(product);
    return (
        <>
            {product && (
                <div>
                    <h1>{product.title}</h1>
                </div>
            )}
        </>
    );
};

export default DetailedProduct;
