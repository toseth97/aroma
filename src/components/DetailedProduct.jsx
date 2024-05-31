"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ProductContext from "@/context/ProductContext";
import { useParams } from "next/navigation";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn, useSession } from "next-auth/react";

const DetailedProduct = () => {
    const { data: session } = useSession();
    const { products } = useContext(ProductContext);
    const [detailedProduct, setDetailedProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { Id } = useParams();

    // This useEffect is used because, there might be some cases where the user already have the url of the said products. In this way the Product Provider's product is empty. And if i filter it directly its gonna throw error. In need to pass the useEffect and Product dependency to ensure that it load product.
    useEffect(() => {
        const getProductDetail =
            products && products.find((items) => items._id == Id);
        setDetailedProduct(getProductDetail);
    }, [Id, products]);

    //order quantity function

    function orderQuantity(params) {
        if (params == "plus") {
            setQuantity(quantity + 1);
        } else if (params == "minus") {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    }

    return (
        <section className="w-full py-4 px-8">
            <ToastContainer />
            <Link
                className="mt-6 bg-orange-600 lg:py-2 py-3 rounded-full text-white inline-block w-12 text-4xl font-bold h-12 duration-200 ease-in-out hover:bg-orange-500 hover:shadow-2xl flex items-center justify-center"
                href="/product"
            >
                <IoIosArrowRoundBack />
            </Link>
            <div className="w-full flex flex-col items-center justify-center py-8">
                {" "}
                {detailedProduct ? (
                    <>
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
                                <p className="text-sm my-4 opacity-80 text-justify">
                                    {detailedProduct.description}
                                </p>
                                <p className="font-semibold text-2xl title__text">
                                    ${detailedProduct.price}.00
                                </p>
                                <div className=" mt-4 flex lg:w-3/12 w-6/12  items-center justify-evenly  border rounded overflow-hidden ">
                                    <button
                                        className="w-5/12 flex items-center justify-center grow-0 hover:bg-gray-200 active:bg-gray-200 duration-200 ease-in-out lg:py-3 lg:px-1 py-5 px-5"
                                        onClick={() => orderQuantity("minus")}
                                    >
                                        <FaMinus
                                            style={{
                                                color: "black",
                                                fontSize: "14px",
                                            }}
                                        />
                                    </button>

                                    <p className="text-xl font-bold grow w-full text-center">
                                        {quantity}
                                    </p>

                                    <button
                                        className="w-5/12 flex items-center justify-center grow-0 hover:bg-gray-200 active:bg-gray-200 duration-200 ease-in-out lg:py-3 lg:px-1 py-5 px-5"
                                        onClick={() => orderQuantity("plus")}
                                    >
                                        <FaPlus
                                            style={{
                                                color: "black",
                                                fontSize: "14px",
                                            }}
                                        />
                                    </button>
                                </div>
                                <button
                                    className="mt-6 bg-sky-900 lg:w-3/12 w-6/12 lg:py-2 py-3 rounded text-white duration-200 ease-in-out hover:bg-sky-800"
                                    onClick={() =>
                                        toast.success("successfully added")
                                    }
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        <div className="w-full my-4 mt-8 flex flex-col items-center justify-center ">
                            <div className="  w-full flex items-center justify-center bg-sky-100">
                                <h2 className="px-16 py-2 my-2 bg-white font-semibold">
                                    Reviews
                                </h2>
                            </div>
                            {session ? (
                                detailedProduct.ratings != [] ? (
                                    <div className="mt-8 ">
                                        <p>This are the reviews</p>
                                    </div>
                                ) : (
                                    <div className="mt-8 ">
                                        <p>No review for this product</p>
                                    </div>
                                )
                            ) : (
                                <button
                                    href={signIn}
                                    className="mt-8 font-semibold"
                                >
                                    Sign in to add review
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="loading__screen h-52 flex items-center justify-center">
                        <div className="loading"></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DetailedProduct;
