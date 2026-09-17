import Link from "next/link";

export default function Footers() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            Velloura
          </div>

          <p>
            Luxury footwear for modern
            feminine expression.
          </p>
        </div>

        <div className="footer-column">
          <span>EXPLORE</span>

          <Link href="/shop">Shop</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="footer-column">
          <span>CLIENT CARE</span>

          <Link href="/contact">Contact</Link>
          <Link href="/cart">Shopping Bag</Link>
          <Link href="/wishlist">Wishlist</Link>
        </div>

        <div className="footer-column">
          <span>FOLLOW</span>

          <a href="#" aria-label="Instagram">
            Instagram
          </a>

          <a href="#" aria-label="Pinterest">
            Pinterest
          </a>

          <a href="#" aria-label="TikTok">
            TikTok
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 VELLOURA
        </span>

        <span>
          Crafted with elegance.
        </span>
      </div>
    </footer>
  );
}