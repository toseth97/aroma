import { Inter } from "next/font/google";
import "./globals.css";
import "./mediascreen.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Aroma",
    description: "Aroma is an online ecommerce website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={`overflow-x-hidden`}>
                <header className="flex items-center justify-center shadow sticky top-0">
                    <Navigation />
                </header>
                <main className="">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
