import Link from "next/link";

const categories = [
  {
    number: "01",
    name: "Heels",
    description: "Elegant silhouettes",
    slug: "heels",
  },
  {
    number: "02",
    name: "Pumps",
    description: "Classic refinement",
    slug: "pumps",
  },
  {
    number: "03",
    name: "Sandals",
    description: "Light & graceful",
    slug: "sandals",
  },
  {
    number: "04",
    name: "Flats",
    description: "Everyday elegance",
    slug: "flats",
  },
];

export default function Categories() {
  return (
    <section className="categories-section">
      <div className="section-heading">
        <div>
          <span className="section-eyebrow">
            SHOP BY STYLE
          </span>

          <h2>
            Find your
            <em> silhouette.</em>
          </h2>
        </div>

        <p>
          Discover footwear designed around
          confidence, elegance and individuality.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            href={`/shop?category=${category.slug}`}
            className="category-card"
            key={category.slug}
          >
            <span className="category-number">
              {category.number}
            </span>

            <div className="category-visual">
              <span>VELLOURA</span>
            </div>

            <div className="category-info">
              <div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>

              <span className="category-arrow">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}