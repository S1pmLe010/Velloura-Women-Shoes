import Link from "next/link";
import products from "@/data/products.json";

export default function BrandsPage() {
  const brands = [
    ...new Set(products.map((product) => product.brand)),
  ];

  return (
    <main className="brands-page">
      <section className="brands-hero">
        <span className="section-eyebrow">
          THE HOUSES
        </span>

        <h1>
          Iconic names.
          <em> Timeless style.</em>
        </h1>

        <p>
          Discover the designers and luxury houses
          curated by Velloura.
        </p>
      </section>

      <section className="brands-list">
        {brands.map((brand, index) => {
          const count = products.filter(
            (product) => product.brand === brand
          ).length;

          return (
            <Link
              href={`/shop?brand=${encodeURIComponent(
                brand
              )}`}
              className="brand-row"
              key={brand}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{brand}</h2>

              <span>
                {count} pieces
              </span>

              <span className="brand-arrow">
                ↗
              </span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}