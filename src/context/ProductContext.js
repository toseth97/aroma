"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [trendingProduct, setTrendingProduct] = useState(null);
    const [bestSeller, setBestSeller] = useState(null);
    const [products, setProducts] = useState(null);
    const [productFilterBtn, setProductFilterBtn] = useState(false);

    // 3,19,33,42
    useEffect(() => {
        // Get the product
        (async () => {
            const getApi = await axios.get("/api/product");
            const data = getApi.data.products;
            const arr1 = data.filter(
                (item) => item.id == 1 || item.id == 10 || item.id == 18
            );
            const arr2 = data.filter(
                (item) => item.id == 2 || item.id == 9 || item.id == 29
            );

            setTrendingProduct(arr1);
            setBestSeller(arr2);
            setProducts(data);
        })();
    }, []);

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
