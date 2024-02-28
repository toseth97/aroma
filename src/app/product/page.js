import React from "react";
import { getProduct } from "@/lib/product";

const page = () => {
    const cat = [
        "Clothes",
        "Electronics",
        "Furniture",
        "Miscellaneous",
        "Shoes",
        "Jewelery",
        "Grocery",
        "Games",
    ];
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full shop__hero flex flex-col items-center justify-center">
                <h1 className="text-4xl title__text font-bold mb-2">
                    Shop Category
                </h1>
                <p className="opacity-60 text-sm">Home - Shop category</p>
            </div>
            <div className="lg:w-10/12 w-11/12 bg-white py-16 lg:px-8 px-2 flex justify-between flex-col ">
                <div className="lg:w-3/12 w-full flex flex-col items-center justify-center px-2">
                    <div className="productNav w-full  pb-8">
                        <h1 className=" productNav__title w-full text-white title__text flex items-center justify-center mb-8">
                            Browse Categories
                        </h1>
                        <div className="px-8">
                            {cat.map((item) => (
                                <div
                                    key={item}
                                    className="w-11/12 flex gap-4 my-1 "
                                >
                                    <input
                                        type="radio"
                                        name="category"
                                        value={item}
                                        key={item}
                                        id={item}
                                        className="catInput"
                                    />
                                    <label for={item} className="opacity-70">
                                        {item}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/12 w-full mt-8 flex flex-col items-center justify-center px-2">
                    <div className="productNav w-full  pb-8">
                        <h1 className=" productNav__title w-full text-white title__text flex items-center justify-center mb-8">
                            Product Filter
                        </h1>
                        <div className="px-8"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
