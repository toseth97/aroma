"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import TrendingProduct from "@/components/TrendingProduct";
import SlashSales from "@/components/SlashSales";
import { getProduct } from "@/lib/product";
import { useEffect, useState } from "react";

export default function Home() {
    const [trendingProduct, setTrendingProduct] = useState(null);

    // 3,19,33,42
    useEffect(() => {
        // Get the product
        (async () => {
            const arr = [];
            const get = await getProduct();
            arr.push(get[3], get[6], get[9]);
            setTrendingProduct(arr);
        })();
    }, []);

    return (
        <main className="flex flex-col items-center justify-center w-full">
            <Hero />
            <TrendingProduct product={trendingProduct} />
            <SlashSales />
        </main>
    );
}
