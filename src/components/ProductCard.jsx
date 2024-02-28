import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const ProductCard = ({ item }) => {
    return (
        <div className="text-center w-full lg:w-4/12 p-4 product__card flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center card__image__div bg-green-100">
                <Image
                    src={item.images[0]}
                    alt="item.title"
                    className="card__image"
                    width={300}
                    height={300}
                    loading="lazy"
                />
                <div className="w-full flex gap-3 items-center justify-center  viewProductDiv">
                    <Link href={`product/${item.id}`}>
                        <CiShoppingCart className="viewProductIcon" />
                    </Link>
                </div>
            </div>

            <p className="h-8 mt-4 opacity-70">{item.category.name}</p>
            <h3 className="title__text text-xl lg:h-16 h-8 blue__text">
                {item.title.length > 35
                    ? `${item.title.slice(0, 36)}...`
                    : item.title}
            </h3>
            <p className=" opacity-70 font-bold">$ {item.price}.00</p>
        </div>
    );
};

export default ProductCard;
