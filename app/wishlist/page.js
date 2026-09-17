"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  const loadWishlist = () => {
    const saved = JSON.parse(
      localStorage.getItem("velloura-wishlist") || "[]"
    );

    setWishlist(saved);
  };

  useEffect(() => {
    loadWishlist();

    window.addEventListener(
      "velloura-wishlist-updated",
      loadWishlist
    );

    return () => {
      window.removeEventListener(
        "velloura-wishlist-updated",
        loadWishlist
      );
    };
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(
      (product) =>
        String(product.id) !== String(id)
    );

    setWishlist(updated);

    localStorage.setItem(
      "velloura-wishlist",
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("velloura-wishlist-updated")
    );
  };

  return (
    <main className="wishlist-page">
      <section className="page-heading">
        <span className="section-eyebrow">
          SAVED FOR LATER
        </span>

        <h1>
          Your
          <em> wishlist.</em>
        </h1>

        <p className="wishlist-count">
          {wishlist.length}{" "}
          {wishlist.length === 1
            ? "piece"
            : "pieces"}{" "}
          saved
        </p>
      </section>

      {wishlist.length === 0 ? (
        <section className="empty-state">
          <span>♡</span>

          <h2>
            Nothing saved yet.
          </h2>

          <p>
            When you find a piece you love,
            save it here.
          </p>

          <Link href="/shop">
            Discover footwear →
          </Link>
        </section>
      ) : (
        <section className="wishlist-grid">
          {wishlist.map((product) => (
            <article
              className="wishlist-card"
              key={product.id}
            >
              <Link
                href={`/product/${product.id}`}
                className="wishlist-card-link"
              >
                <div className="wishlist-image">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={`${product.brand} ${product.name}`}
                    />
                  ) : (
                    <span>VELLOURA</span>
                  )}
                </div>

                <div className="wishlist-info">
                  <span>
                    {product.brand}
                  </span>

                  <h2>
                    {product.name}
                  </h2>

                  <p>
                    $
                    {Number(
                      product.price || 0
                    ).toLocaleString()}
                  </p>
                </div>
              </Link>

              <button
                type="button"
                className="wishlist-remove"
                onClick={() =>
                  removeFromWishlist(product.id)
                }
              >
                ♥
              </button>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}