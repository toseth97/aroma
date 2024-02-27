import React from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="w-full flex flex-col items-center justify-center pt-16 text-xs font-light">
            <div className="lg:w-9/12 w-11/12 flex justify-between lg:flex-row flex-col">
                <div className="lg:w-4/12 w-full flex flex-col lg:text-left text-center mb-4">
                    <h2 className="text-2xl mb-4 font-bold">Our Mission</h2>
                    <p>
                        So seed seed green that winged cattle in. Gathering
                        thing made fly you&apos;re no divided deep moved us lan
                        Gathering thing us land years living.
                    </p>
                    <p>
                        So seed seed green that winged cattle in. Gathering
                        thing made fly you&apos;re no divided deep moved
                    </p>
                </div>
                <div className="flex flex-col lg:text-left text-center mb-4">
                    <h2 className="text-2xl mb-4 font-bold">Quick Link</h2>
                    <Link href="/" className="contact_links">
                        <p>Home</p>
                    </Link>
                    <Link href="/" className="contact_links">
                        <p>About</p>
                    </Link>
                    <Link href="/" className="contact_links">
                        <p>Shop</p>
                    </Link>
                    <Link href="/" className="contact_links">
                        <p>Contact</p>
                    </Link>
                </div>
                <div>
                    <h2 className="text-2xl mb-4 font-bold text-center lg:text-left">
                        Contact Us
                    </h2>
                    <div className="contact_info flex gap-8">
                        <FaLocationArrow className="icons" />

                        <div className="">
                            <h3 className="text-sm mb-2 font-bold">
                                Head Office
                            </h3>
                            <p>123, Main Street, Your City</p>
                        </div>
                    </div>
                    <div className="contact_info flex gap-8 mt-4">
                        <IoCall className="icons" />

                        <div className="">
                            <h3 className="text-sm mb-2 font-bold">Phone</h3>
                            <p>+(234)8120272000</p>
                        </div>
                    </div>
                    <div className="contact_info flex gap-8 mt-4">
                        <MdOutlineEmail className=" icons" />

                        <div className="">
                            <h3 className="text-sm mb-2 font-bold">Email</h3>
                            <p>oluwasheun9721@gmail.com</p>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full text-center py-8 px-4 mt-8 border-t">
                <p className="">
                    Copyright © {date} All rights reserved | Made with ♥ from
                    Nigeria by{" "}
                    <Link
                        href="https://tobiloba.vercel.app/"
                        target="_blank"
                        className="text-blue-400 underline opacity-100 font-bold"
                    >
                        Tobiloba Lawal
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
