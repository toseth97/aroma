import React from "react";
import SinglePage from "@/app/product/[Id]/SinglePage";
import { getProduct } from "@/lib/product";

const page = async () => {
    const products = await getProduct();
    return <SinglePage products={products} />;
};

export default page;
