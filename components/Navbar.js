"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`main-nav ${menuOpen ? "menu-open" : ""}`}>
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>

      <div className="nav-links">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link href="/shop" onClick={() => setMenuOpen(false)}>
          Shop
        </Link>

        <Link href="/brands" onClick={() => setMenuOpen(false)}>
          Brands
        </Link>

        <Link href="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}