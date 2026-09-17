import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
      </div>

      <div className="hero-content">
        <span className="hero-eyebrow">
          VELLOURA / 2026 COLLECTION
        </span>

        <h1 className="hero-title">
          Elegance
          <span>in every step.</span>
        </h1>

        <p className="hero-description">
          A curated collection of feminine silhouettes,
          refined details and timeless luxury footwear.
        </p>

        <div className="hero-actions">
          <Link href="/shop" className="primary-button">
            Explore Collection
            <span>→</span>
          </Link>

          <Link href="/brands" className="secondary-button">
            Discover Brands
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          <div className="hero-image-placeholder">
            <span>VELLOURA</span>
          </div>
        </div>

        <div className="hero-floating-note">
          <span>01</span>
          <p>
            Soft silhouettes.
            <br />
            Modern romance.
          </p>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO DISCOVER</span>

        <div className="hero-scroll-line"></div>

        <span>01 — 04</span>
      </div>
    </section>
  );
}