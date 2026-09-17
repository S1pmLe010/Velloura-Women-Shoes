"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("velloura-cart") || "[]"
    );

    setCart(saved);
  }, []);

  const removeItem = (index) => {
    const updated = cart.filter(
      (_, itemIndex) => itemIndex !== index
    );

    setCart(updated);

    localStorage.setItem(
      "velloura-cart",
      JSON.stringify(updated)
    );
  };

  const total = cart.reduce(
    (sum, product) =>
      sum + Number(product.price || 0),
    0
  );

  return (
    <main className="cart-page">
      <section className="page-heading">
        <span className="section-eyebrow">
          YOUR SELECTION
        </span>

        <h1>
          Shopping
          <em> bag.</em>
        </h1>
      </section>

      {cart.length === 0 ? (
        <section className="empty-state">
          <span>♡</span>

          <h2>Your bag is empty.</h2>

          <p>
            Discover something beautiful for
            your next occasion.
          </p>

          <Link href="/shop">
            Explore the collection →
          </Link>
        </section>
      ) : (
        <section className="cart-content">
          <div className="cart-items">
            {cart.map((product, index) => (
              <article
                className="cart-item"
                key={`${product.id}-${index}`}
              >
                <div className="cart-item-image">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  ) : (
                    <span>V</span>
                  )}
                </div>

                <div className="cart-item-info">
                  <span>{product.brand}</span>

                  <h2>{product.name}</h2>

                  <p>
                    {product.category ||
                      "Luxury footwear"}
                  </p>
                </div>

                <div className="cart-item-price">
                  $
                  {Number(
                    product.price || 0
                  ).toLocaleString()}
                </div>

                <button
                  onClick={() => removeItem(index)}
                  className="remove-item"
                >
                  Remove
                </button>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <span className="section-eyebrow">
              SUMMARY
            </span>

            <div>
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div>
              <span>Subtotal</span>
              <strong>
                ${total.toLocaleString()}
              </strong>
            </div>

            <button>
              Proceed to checkout →
            </button>
          </aside>
        </section>
      )}
    </main>
  );
}