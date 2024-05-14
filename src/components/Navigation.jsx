"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo.png.webp";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { useSession, signOut, signIn } from "next-auth/react";

const Navigation = () => {
    const { data: session } = useSession();

    const [mobile, setMobile] = useState(false);
    const [profile, setProfile] = useState(false);
    const handleMobile = () => {
        setMobile(!mobile);
    };

    const showProfile = () => {
        setProfile(!profile);
        console.log("Updated");
        console.log(profile);
    };

    return (
        <nav className="lg:w-10/12 w-full lg:px-1 px-4 flex items-center justify-between h-full relative">
            <Link href="/">
                <Image
                    src={Logo}
                    alt="logo"
                    width={150}
                    height={150}
                    priority={false}
                />
            </Link>
            <ul className="lg:flex items-center hidden h-full text-sm">
                <Link
                    href="/"
                    className="h-full flex items-center px-4 nav__link"
                >
                    <li>Home</li>
                </Link>
                <Link
                    href="/product"
                    className="h-full flex items-center px-4 nav__link"
                >
                    <li>Product</li>
                </Link>
                <Link
                    href="/blog"
                    className="h-full flex items-center px-4 nav__link"
                >
                    <li>Cart</li>
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
                    <li>About</li>
                </Link>
                {session?.user && (
                    <div className="relative cursor-pointer">
                        <Image
                            src={session.user.image}
                            alt={session.user.name}
                            className="rounded-full mx-4 "
                            title="profile"
                            width={40}
                            height={40}
                            onClick={showProfile}
                        />
                        <div
                            className={`${
                                profile ? " top-1 block " : " top-20 hidden"
                            }   shadow-2xl border bg-white absolute w-[10rem] px-4 duration-300 ease-in-out flex flex-col items-center justify-center  gap-2 left-1/2 -translate-x-1/2 py-2`}
                        >
                            <Link
                                href="/profile"
                                className="w-full p-2 mb-1 inline-block bg-blue-100 text-center"
                            >
                                Profile
                            </Link>
                            <button
                                onClick={() => signOut()}
                                className="mx-4 w-full px-4  rounded-3xl auth__btn"
                            >
                                {" "}
                                Sign Out
                            </button>
                        </div>
                    </div>
                )}

                {!session?.user && (
                    <button
                        onClick={() => signIn()}
                        className="mx-4  px-4  rounded-3xl auth__btn"
                    >
                        Sign In
                    </button>
                )}
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
                    href="/product"
                    onClick={handleMobile}
                    className={`py-4 w-full border-b flex items-center justify-center px-4 mobile__link ${
                        mobile ? "active" : "in-active"
                    }`}
                >
                    <li>Product</li>
                </Link>
                <Link
                    href="/blog"
                    onClick={handleMobile}
                    className={`py-4 w-full border-b flex items-center justify-center px-4 mobile__link ${
                        mobile ? "active" : "in-active"
                    }`}
                >
                    <li>Cart</li>
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
                    <li>About</li>
                </Link>
                {session?.user ? (
                    <button
                        onClick={() => signOut()}
                        className={`py-4 w-full border-b flex items-center justify-center px-4 mobile__link ${
                            mobile ? "active" : "in-active"
                        }`}
                    >
                        {" "}
                        Sign Out
                    </button>
                ) : (
                    <button
                        onClick={() => signIn()}
                        className={`py-4 w-full border-b flex items-center justify-center px-4 mobile__link ${
                            mobile ? "active" : "in-active"
                        }`}
                    >
                        Sign In
                    </button>
                )}
            </ul>

            <div className="h-full flex items-center justify-center lg:hidden block">
                {session?.user && (
                    <Image
                        src={session.user.image}
                        alt={session.user.name}
                        className="rounded-full mx-4 lg:hidden block"
                        title="profile"
                        width={40}
                        height={40}
                    />
                )}
                <div
                    className={`menu h-full flex items-center justify-center lg:hidden block`}
                    onClick={handleMobile}
                >
                    <div
                        className={`menu__btn ${
                            mobile ? "active" : "in-active"
                        }`}
                    ></div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
