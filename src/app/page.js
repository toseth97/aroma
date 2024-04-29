"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import TrendingProduct from "@/components/TrendingProduct";
import SlashSales from "@/components/SlashSales";
import { getProduct } from "@/lib/product";
import { useContext } from "react";
import ProductContext from "@/context/ProductContext";
import BestSellingProduct from "@/components/BestSellingProduct";

export default function Home() {
    const { trendingProduct, bestSeller } = useContext(ProductContext);

    return (
        <main className="flex flex-col items-center justify-center w-full">
            <Hero />
            <TrendingProduct
                product={trendingProduct}
                text="Trending Product"
            />
            <SlashSales />
            <BestSellingProduct product={bestSeller} text="Best Sellers" />
        </main>
    );
}
