import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const ProductCard = ({ item }) => {
    return (
        <div className="text-center lg:w-1/3 w-2/5 lg:p-4 p-2 product__card flex flex-col items-center justify-center mt-2">
            <div className="w-full flex flex-col items-center justify-center card__image__div ">
                <Image
                    src={item.imageUrl}
                    alt="item.title"
                    className="card__image w-full h-auto object-cover"
                    width={300}
                    height={200}
                    priority={false}
                />
                <div className="w-full flex gap-0 items-center justify-center  viewProductDiv">
                    <Link href={`product/${item._id}`}>
                        <CiShoppingCart className="viewProductIcon" />
                    </Link>
                </div>
            </div>

            <p className="lg:mt-4 mt-1 opacity-70 text-xs">
                {item.category.title}
            </p>
            <h3
                className={`title__text text-sm lg:h-6  ${
                    item.title.length > 15 ? "h-10" : "h-8"
                }   blue__text`}
            >
                {item.title.length > 20
                    ? `${item.title.slice(0, 21)}...`
                    : item.title}
            </h3>
            <p className=" opacity-60">$ {item.price}.00</p>
        </div>
    );
};

export default ProductCard;
