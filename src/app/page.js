"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import TrendingProduct from "@/components/TrendingProduct";
import SlashSales from "@/components/SlashSales";
import { getProduct } from "@/lib/product";
import { useEffect, useState } from "react";

export default function Home() {
    const [trendingProduct, setTrendingProduct] = useState(null);
    const [bestSeller, setBestSeller] = useState(null);

    // 3,19,33,42
    useEffect(() => {
        // Get the product
        (async () => {
            const arr1 = [];
            const arr2 = [];
            const getApi = await getProduct();
            arr1.push(getApi[3], getApi[6], getApi[9]);
            setTrendingProduct(arr1);
            arr2.push(getApi[28], getApi[18], getApi[1]);
            setBestSeller(arr2);
        })();
    }, []);

    return (
        <main className="flex flex-col items-center justify-center w-full">
            <Hero />
            <TrendingProduct
                product={trendingProduct}
                text="Trending Product"
            />
            <SlashSales />
            <TrendingProduct product={bestSeller} text="Best Sellers" />
        </main>
    );
}
