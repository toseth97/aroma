"use client";
import React from "react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ProductContext from "@/context/ProductContext";
import { useParams } from "next/navigation";

const DetailedProduct = () => {
    const { products } = useContext(ProductContext);
    const [detailedProduct, setDetailedProduct] = useState({});
    const { Id } = useParams();
    console.log(Id);

    // This useEffect is used because, there might be some cases where the user already have the url of the said products. In this way the Product Provider's product is empty. And if i filter it directly its gonna throw error. In need to pass the useEffect and Product dependency to ensure that it load product.
    useEffect(() => {
        const getProductDetail =
            products && products.find((items) => items._id == Id);
        setDetailedProduct(getProductDetail);
    }, [Id, products]);

    console.log(detailedProduct);
    return (
        <section className="w-full flex items-center justify-center py-16">
            {detailedProduct ? (
                <div className="flex flex-col lg:flex-row lg:justify-between justify-center w-11/12 lg:w-10/12 gap-8 ">
                    <div className="lg:w-4/12 w-full rounded-lg">
                        <Image
                            alt={detailedProduct.title}
                            src={detailedProduct.imageUrl}
                            className="object-contain"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="lg:w-7/12 w-full">
                        <h1 className="text-4xl font-bol title__text">
                            {detailedProduct.title}
                        </h1>
                        <p className="text-sm my-8 opacity-80 text-justify">
                            {detailedProduct.description}
                        </p>
                        <p className="font-semibold text-2xl title__text">
                            ${detailedProduct.price}.00
                        </p>
                    </div>
                </div>
            ) : (
                <div className="loading__screen h-52 flex items-center justify-center">
                    <div className="loading"></div>
                </div>
            )}
        </section>
    );
};

export default DetailedProduct;
