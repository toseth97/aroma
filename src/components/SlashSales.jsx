import React from "react";
import Image from "next/image";
import Cart from "../assets/shopping-cart-removebg.png";

const SlashSales = () => {
    return (
        <div className="w-full slash__sales my-8 py-8">
            <Image
                src={Cart}
                alt="cart"
                width={800}
                className="absolute right-0 hidden lg:block"
            />
            <div className="z-20 flex flex-col items-center justify-center lg:w-5/12 w-full h-full">
                <h2 className="text-5xl font-bold">Up To 50% Off</h2>
                <h3 className="text-2xl my-2">Winter Sale</h3>
                <p className="mt-4 opacity-70">
                    Him she&apos;d let them sixth saw light
                </p>
                <button className="browse-now__btn my-8">Browse Now</button>
            </div>
        </div>
    );
};

export default SlashSales;
