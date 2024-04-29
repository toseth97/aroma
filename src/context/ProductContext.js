"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [trendingProduct, setTrendingProduct] = useState(null);
    const [bestSeller, setBestSeller] = useState(null);
    const [products, setProducts] = useState(null);
    const [productFilterBtn, setProductFilterBtn] = useState(false);
    const [productLoading, setProductLoading] = useState(false);
    //Load products from back end api
    useEffect(() => {
        setProductLoading((item) => true);
        productLoading &&
            (async () => {
                const get = await axios.get("/api/product");
                const data = get.data;
                setBestSeller([data[1], data[12], data[28]]);
                setTrendingProduct([data[0], data[9], data[2]]);
                setProducts(data);
            })();
    }, [productLoading]);
    return (
        <ProductContext.Provider
            value={{
                trendingProduct,
                bestSeller,
                products,
                productFilterBtn,
                setProductFilterBtn,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
