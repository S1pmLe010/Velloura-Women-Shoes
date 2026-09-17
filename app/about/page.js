import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="section-eyebrow">
            OUR PHILOSOPHY
          </span>

          <h1>
            Beauty in
            <em> every detail.</em>
          </h1>

          <p>
            Velloura is a destination for women
            who see footwear as more than an accessory.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-number">
          01
        </div>

        <div className="about-story-content">
          <span className="section-eyebrow">
            THE IDEA
          </span>

          <h2>
            Luxury should feel
            <em> personal.</em>
          </h2>

          <p>
            We curate distinctive footwear from
            renowned fashion houses and emerging
            names, bringing together pieces that
            celebrate individuality.
          </p>

          <p>
            From elegant heels to effortless flats,
            every selection is chosen with an eye
            for craftsmanship, silhouette and
            timeless character.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div>
          <span>01</span>
          <h3>Elegance</h3>
          <p>
            Refined silhouettes made to remain
            beautiful beyond seasons.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Curated</h3>
          <p>
            A carefully selected world of luxury
            footwear.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Expression</h3>
          <p>
            Pieces that allow your own style
            to speak.
          </p>
        </div>
      </section>

      <section className="about-cta">
        <span className="section-eyebrow">
          STEP INTO VELLOURA
        </span>

        <h2>
          Your next pair
          <em> awaits.</em>
        </h2>

        <Link href="/shop">
          Explore Collection →
        </Link>
      </section>
    </main>
  );
}