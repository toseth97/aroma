"use client";
import { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import { set } from "mongoose";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [trendingProduct, setTrendingProduct] = useState(null);
    const [bestSeller, setBestSeller] = useState(null);
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState(null);
    const [productFilter, setProductFilter] = useState(false);
    const [productLoading, setProductLoading] = useState(false);
    const [categoryLoading, setCategoryLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [categorySearch, setCategorySearch] = useState("All");
    const [showMobileFilter, setShowMobileFilter] = useState(false);

    // const footerElement = document.getElementsByTagName("footer");

    // const filterObserver = new IntersectionObserver((entries) => {
    //     if (!entry.isIntersecting) {
    //         setFilterIntersection((prev) => true);
    //         console.log("changed to true");
    //     } else {
    //         setFilterIntersection((prev) => false);
    //         console.log("changed to false");
    //     }
    // });

    // filterObserver.observe(footerElement);

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
                    setCategory(data2.categories);
                    setProducts(data1);
                    setProductFilter(data1);
                })
                .catch((error) => {
                    console.error(error);
                });
    }, [productLoading]);

    //set Search parameter
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    //using search parameter value to search for product
    useEffect(() => {
        if (search) {
            const searchFilter = products.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
            setProductFilter(searchFilter);
        } else {
            setProductFilter(products);
        }
    }, [search]);

    //set category Parameter
    const handleCategoryFilter = (params) => {
        setCategorySearch(params);
    };

    //using category parameter value to filter product
    useEffect(() => {
        if (categorySearch === "All") {
            setProductFilter(products);
        } else {
            const categoryFilter = products.filter(
                (item) => item.category.title === categorySearch
            );
            setProductFilter(categoryFilter);
        }
    }, [categorySearch]);

    return (
        <ProductContext.Provider
            value={{
                trendingProduct,
                bestSeller,
                products,
                productFilter,
                setProductFilter,
                category,
                search,
                handleSearch,
                handleCategoryFilter,
                setShowMobileFilter,
                showMobileFilter,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
