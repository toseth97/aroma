import { Inter } from "next/font/google";
import "./globals.css";
import "./mediascreen.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Aroma",
    description: "Aroma is an online ecommerce website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`overflow-x-hidden`}>
                <header className="flex items-center justify-center shadow">
                    <Navigation />
                </header>
                <main className="">{children}</main>
            </body>
        </html>
    );
}
