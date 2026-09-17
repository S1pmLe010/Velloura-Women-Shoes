import Link from "next/link";

export default function Editorial() {
  return (
    <section className="editorial-section">
      <div className="editorial-image">
        <div className="editorial-image-content">
          <span>V</span>
        </div>
      </div>

      <div className="editorial-content">
        <span className="section-eyebrow">
          THE VELLOURA WOMAN
        </span>

        <h2>
          Softness can
          <em> be powerful.</em>
        </h2>

        <p>
          Velloura brings together iconic luxury
          footwear and modern feminine design.
          Every piece is selected to become part
          of your own story.
        </p>

        <Link href="/about" className="editorial-link">
          Discover Velloura
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}