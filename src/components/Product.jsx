"use client";
import { useRef, useEffect, useState } from "react";
import { useContext } from "react";
import ProductContext from "@/context/ProductContext";
import ProductCard from "./ProductCard";
import { FaLongArrowAltRight } from "react-icons/fa";

const Product = () => {
    const shopHeroRef = useRef();
    const [mobileFilter, setMobileFilter] = useState(false);

    const {
        productFilter,
        setProductFilter,
        category,
        search,
        handleSearch,
        handleCategoryFilter,
        showMobileFilter,
        setShowMobileFilter,
    } = useContext(ProductContext);

    useEffect(() => {
        const filterObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];

            if (entry.isIntersecting && entry.intersectionRatio > 0) {
                setShowMobileFilter(false);
            } else {
                setShowMobileFilter(true);
            }
        });
        filterObserver.observe(shopHeroRef.current);
    }, []);

    const cat = category && category.map((items) => items.title);
    cat && cat.unshift("All");

    const filterDisplay = () => {
        setProductFilter(!productFilter);
    };
    return (
        <>
            {mobileFilter && (
                <div className="w-full h-screen py-10 px-5 bg-black/50 fixed z-20">
                    <div className=" w-full flex flex-col items-center justify-center px-2">
                        <div className="productNav w-full  pb-8 flex flex-col items-center justify-center">
                            <h1 className=" productNav__title w-full text-white title__text flex items-center justify-center mb-8">
                                Product Search
                            </h1>
                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => handleSearch(e)}
                                className="inline-block w-11/12 py-1 px-2 text-sm outline-none opacity-70"
                            />
                            <div className="px-8"></div>
                        </div>
                    </div>

                    <div className=" w-full flex flex-col items-center justify-center px-2">
                        <div className="productNav w-full  pb-8">
                            <h1 className=" productNav__title w-full text-white title__text flex items-center justify-center mb-8">
                                Browse Categories
                            </h1>
                            <div className="px-8">
                                {category &&
                                    cat.map((item) => (
                                        <p
                                            key={item}
                                            className="my-2 py-1 w-full cursor-pointer "
                                            onClick={() => {
                                                handleCategoryFilter(item);
                                                setMobileFilter(false);
                                            }}
                                        >
                                            {item}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-full flex flex-col items-center min-h-screen justify-center relative ">
                {
                    //******** mobile filter *********/
                }

                <button
                    onClick={() => setMobileFilter((prev) => !prev)}
                    className={`${
                        showMobileFilter ? " show" : null
                    }  fixed bottom-10 object-center bg-blue-700 px-8 py-2 showFilterBtn text-white z-20 rounded-3xl productFilterBtn`}
                >
                    {mobileFilter ? <p>X</p> : <p>Filter Products</p>}
                </button>

                <div
                    ref={shopHeroRef}
                    className="w-full shop__hero flex flex-col items-center justify-center"
                >
                    <h1 className="text-4xl title__text font-bold mb-2">
                        Shop Category
                    </h1>
                    <p className="opacity-60 text-sm">Home - Shop category</p>
                </div>

                <div className="w-11/12 bg-white lg:py-16 py-4 lg:px-8 px-2 flex items-start gap-8 z-10 relative">
                    {
                        //******** mobile search *********/
                    }

                    <div
                        className={`lg:w-3/12 w-9/12 gap-8 flex flex-col items-center justify-center sticky lg:top-[80px] lg:block hidden z-10`}
                    >
                        {
                            //******** desktop search *********/
                        }
                        <div className=" w-full flex flex-col items-center justify-center px-2">
                            <div className="productNav w-full  pb-8 flex flex-col items-center justify-center">
                                <h1 className=" productNav__title w-full text-white title__text flex items-center justify-center mb-8">
                                    Product Search
                                </h1>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e) => handleSearch(e)}
                                    className="inline-block w-11/12 py-1 px-2 text-sm outline-none opacity-70"
                                />
                                <div className="px-8"></div>
                            </div>
                        </div>

                        <div className=" w-full flex flex-col items-center justify-center px-2">
                            <div className="productNav w-full  pb-8">
                                <h1 className=" productNav__title w-full text-white title__text flex items-center justify-center mb-8">
                                    Browse Categories
                                </h1>
                                <div className="px-8">
                                    {category &&
                                        cat.map((item) => (
                                            <p
                                                key={item}
                                                className="my-2 py-1 w-full cursor-pointer "
                                                onClick={() =>
                                                    handleCategoryFilter(item)
                                                }
                                            >
                                                {item}
                                            </p>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-10/12 w-full  flex flex-wrap gap-2  items-center justify-center border-t">
                        {productFilter ? (
                            productFilter.map((item) => (
                                <ProductCard item={item} key={item.id} />
                            ))
                        ) : (
                            <div className="loading__screen h-52 flex items-center justify-center w-full">
                                <div className="loading"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
