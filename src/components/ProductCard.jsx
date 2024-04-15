import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const ProductCard = ({ item }) => {
    return (
        <div className="text-center lg:w-1/3 w-full p-4 product__card flex flex-col items-center justify-center lg:border-none border rounded-xl mt-2">
            <div className="w-full flex flex-col items-center justify-center card__image__div">
                <Image
                    src={item.thumbnail}
                    alt="item.title"
                    className="card__image w-full"
                    width={700}
                    height={700}
                    loading="lazy"
                />
                <div className="w-full flex gap-3 items-center justify-center  viewProductDiv">
                    <Link href={`product/${item.id}`}>
                        <CiShoppingCart className="viewProductIcon" />
                    </Link>
                </div>
            </div>

            <p className="h-8 mt-4 opacity-70 text-sm">{item.category}</p>
            <h3 className="title__text lg:h-16 h-8 blue__text">
                {item.title.length > 35
                    ? `${item.title.slice(0, 36)}...`
                    : item.title}
            </h3>
            <p className=" opacity-60">$ {item.price}.00</p>
        </div>
    );
};

export default ProductCard;
