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
            (async () => {
                const getProduct = await axios.get("/api/product");
                const productData = getProduct.data;

                setBestSeller([
                    productData[1],
                    productData[12],
                    productData[28],
                ]);
                setTrendingProduct([
                    productData[0],
                    productData[9],
                    productData[2],
                ]);
                setProducts(productData);
            })();
    }, [productLoading]);

    useEffect(() => {
        setCategoryLoading((item) => true);
        categoryLoading &&
            (async () => {
                const getCategory = await axios.get("/api/category");
                const categoryData = getCategory.data.categories;
                setCategory(categoryData);
                console.log(category);
                console.log(categoryData);
            })();
    }, [categoryLoading]);

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
