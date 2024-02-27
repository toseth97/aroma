"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo.png.webp";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

const Navigation = () => {
    const [mobile, setMobile] = useState(false);
    const handleMobile = () => {
        setMobile(!mobile);
    };

    return (
        <nav className="lg:w-10/12 w-full lg:px-1 px-4 flex items-center justify-between h-full relative">
            <Image src={Logo} alt="logo" width={150} height={150} />
            <ul className="lg:flex hidden h-full text-sm">
                <Link
                    href="/"
                    className="h-full flex items-center px-4 nav__link"
                >
                    <li>Home</li>
                </Link>
                <Link
                    href="/shop"
                    className="h-full flex items-center px-4 nav__link"
                >
                    <li>Shop</li>
                </Link>
                <Link
                    href="/blog"
                    className="h-full flex items-center px-4 nav__link"
                >
                    <li>Blogs</li>
                </Link>
                <Link
                    href="/pages"
                    className="h-full flex items-center px-4 nav__link"
                >
                    <li>Pages</li>
                </Link>
                <Link
                    href=""
                    className="h-full flex items-center px-4 nav__link"
                >
                    <li>Contact</li>
                </Link>
            </ul>

            {/* Mobile Menu */}

            <ul
                className={`flex lg:hidden h-full text-sm flex flex-col items-center mobile__menu ${
                    mobile ? "active" : "in-active"
                }`}
            >
                <Link
                    href="/"
                    onClick={handleMobile}
                    className={`py-4 w-full border-b flex items-center justify-center px-4 mobile__link ${
                        mobile ? "active" : "in-active"
                    }`}
                >
                    <li>Home</li>
                </Link>
                <Link
                    href="/shop"
                    onClick={handleMobile}
                    className={`py-4 w-full border-b flex items-center justify-center px-4 mobile__link ${
                        mobile ? "active" : "in-active"
                    }`}
                >
                    <li>Shop</li>
                </Link>
                <Link
                    href="/blog"
                    onClick={handleMobile}
                    className={`py-4 w-full border-b flex items-center justify-center px-4 mobile__link ${
                        mobile ? "active" : "in-active"
                    }`}
                >
                    <li>Blogs</li>
                </Link>
                <Link
                    href=""
                    onClick={handleMobile}
                    className={`py-4 w-full border-b flex items-center justify-center px-4 mobile__link ${
                        mobile ? "active" : "in-active"
                    }`}
                >
                    <li>Pages</li>
                </Link>
                <Link
                    href=""
                    onClick={handleMobile}
                    className={`py-4 w-full border-b flex items-center justify-center px-4 mobile__link ${
                        mobile ? "active" : "in-active"
                    }`}
                >
                    <li>Contact</li>
                </Link>
            </ul>

            <div
                className={`menu h-full flex items-center justify-center lg:hidden block`}
                onClick={handleMobile}
            >
                <div
                    className={`menu__btn ${mobile ? "active" : "in-active"}`}
                ></div>
            </div>
        </nav>
    );
};

export default Navigation;
