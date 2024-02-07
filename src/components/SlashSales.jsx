import React from "react";
import Image from "next/image";
import Cart from "../assets/shopping-cart-removebg.png";

const SlashSales = () => {
    return (
        <div className="w-full slash__sales">
            <Image src={Cart} alt="cart" width={100} />
            <div className="">
                <h2>Up To 50% Off</h2>
                <h3>Winter Sale</h3>
                <p>Him she&apos;d let them sixth saw light</p>
                <button className="browse-now__btn">Browse Now</button>
            </div>
        </div>
    );
};

export default SlashSales;
