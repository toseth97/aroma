import { Inter } from "next/font/google";
import { useContext } from "react";
import { ProductProvider } from "@/context/ProductContext";
import "./globals.css";
import "./mediascreen.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SessionWrapper from "@/context/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Aroma",
    description: "Aroma is an online ecommerce website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`overflow-x-hidden`}>
                <ProductProvider>
                    <SessionWrapper>
                        <header className="flex items-center justify-center shadow sticky top-0">
                            <Navigation />
                        </header>
                        <main className="">{children}</main>
                        <Footer />
                    </SessionWrapper>
                </ProductProvider>
            </body>
        </html>
    );
}
