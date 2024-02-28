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
                (item) => item.id == 1 || item.id == 10 || item.id == 18
            );
            const arr2 = getApi.filter(
                (item) => item.id == 2 || item.id == 9 || item.id == 29
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
