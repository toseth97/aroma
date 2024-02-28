"use client";
import React from "react";
import { useParams } from "next/navigation";

const SinglePage = ({ products }) => {
    const { Id } = useParams();
    const product = products.find((items) => items.id == Number(Id));
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

export default SinglePage;
