"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-shell">
        <Link href="/" className="velloura-logo">
          <span className="logo-mark">V</span>

          <span className="logo-name">
            Velloura
          </span>
        </Link>

        <Navbar />

        <div className="header-actions">
          <Link href="/shop" className="header-icon-link">
            <span>⌕</span>
            <span className="header-action-text">Search</span>
          </Link>

          <Link href="/wishlist" className="header-icon-link">
            <span>♡</span>
          </Link>

          <Link href="/cart" className="header-bag">
            <span>Bag</span>
            <span className="bag-count">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}