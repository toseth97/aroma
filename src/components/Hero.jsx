import React from "react";
import Image from "next/image";
import CartImage from "../assets/hero-banner.png.webp";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="flex w-full items-center justify-between hero__section">
            <div className="hero__img h-full lg:w-5/12 w-1/12">
                <Image
                    src={CartImage}
                    className="cartImage absolute lg:block hidden"
                    alt="hero"
                />
            </div>
            <div className="hero__text lg:w-7/12 w-11/12 h-full flex items-center flex-col  justify-center">
                <div className="lg:w-8/12 w-11/12">
                    <p className="text-2xl opacity-70 hero__p1">Shop is fun</p>
                    <h1 className="font-bold text-5xl my-4 hero__h1">
                        BROWSE OUR PREMIUM PRODUCT
                    </h1>
                    <p className="opacity-70 mb-8 hero__p2">
                        Us which over of signs divide dominion deep fill bring
                        they are meat beho upon own earth without morning over
                        third. Their male dry. They are great appear whose land
                        fly grass
                    </p>

                    <Link href="/product">
                        <button className="browse-now__btn">Browse Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
