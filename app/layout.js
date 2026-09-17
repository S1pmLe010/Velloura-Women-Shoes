import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export const metadata = {
  title: "VELLOURA — Luxury Women's Footwear",
  description:
    "A curated destination for refined women's footwear.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loader />

        <Header />

        <main className="site-main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}