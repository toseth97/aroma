import React from "react";
import Image from "next/image";
const ProductCard = ({ item }) => {
    return (
        <div
            key={item.id}
            className="text-center lg-w-3/12 w-full cursor-pointer p-4 product__card flex flex-col items-center justify-center"
        >
            <div className="w-full flex flex-col items-center justify-center card__image__div">
                <Image
                    src={item.image}
                    alt="item.title"
                    className="card__image"
                    width={100}
                    height={100}
                />
            </div>
            <p className="h-8 mt-4 opacity-70">{item.category}</p>
            <h3 className="title__text text-xl lg:h-16 h-8 blue__text">
                {item.title.length > 35
                    ? `${item.title.slice(0, 36)}...`
                    : item.title}
            </h3>
            <p className=" opacity-70 font-bold">$ {item.price}</p>
        </div>
    );
};

export default ProductCard;
