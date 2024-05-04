"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [trendingProduct, setTrendingProduct] = useState(null);
    const [bestSeller, setBestSeller] = useState(null);
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState(null);
    const [productFilterBtn, setProductFilterBtn] = useState(false);
    const [productLoading, setProductLoading] = useState(false);
    const [categoryLoading, setCategoryLoading] = useState(false);
    //Load products from back end api
    useEffect(() => {
        setProductLoading((item) => true);
        productLoading &&
            Promise.all([fetch("/api/product"), fetch("/api/category")])
                .then((responses) => {
                    return Promise.all(
                        responses.map((response) => response.json())
                    );
                })
                .then((data) => {
                    const [data1, data2] = data;
                    setBestSeller([data1[1], data1[12], data1[28]]);
                    setTrendingProduct([data1[0], data1[9], data1[2]]);
                    console.log(data1);
                    console.log(data2);
                    setCategory(data2.categories);
                    setProducts(data1);
                })
                .catch((error) => {
                    console.error(error);
                });
    }, [productLoading]);

    return (
        <ProductContext.Provider
            value={{
                trendingProduct,
                bestSeller,
                products,
                productFilterBtn,
                setProductFilterBtn,
                category,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
