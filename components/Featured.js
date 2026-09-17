import Link from "next/link";
import products from "@/data/products.json";
import ProductCard from "./ProductCard";

export default function Featured() {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="featured-section">
      <div className="section-heading featured-heading">
        <div>
          <span className="section-eyebrow">
            THE EDIT
          </span>

          <h2>
            Curated
            <em> favourites.</em>
          </h2>
        </div>

        <Link href="/shop" className="text-link">
          View all pieces →
        </Link>
      </div>

      <div className="products-grid">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}