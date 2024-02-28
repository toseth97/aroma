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
            const getApi = await getProduct();

            const arr1 = getApi.filter(
                (item) => item.id == 26 || item.id == 30 || item.id == 28
            );
            const arr2 = getApi.filter(
                (item) => item.id == 30 || item.id == 43 || item.id == 48
            );
            setTrendingProduct(arr1);
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
