"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("velloura-wishlist") || "[]"
    );

    const exists = saved.some(
      (item) => String(item.id) === String(product.id)
    );

    setLiked(exists);
  }, [product.id]);

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const saved = JSON.parse(
      localStorage.getItem("velloura-wishlist") || "[]"
    );

    const exists = saved.some(
      (item) => String(item.id) === String(product.id)
    );

    let updated;

    if (exists) {
      updated = saved.filter(
        (item) =>
          String(item.id) !== String(product.id)
      );

      setLiked(false);
    } else {
      updated = [...saved, product];

      setLiked(true);
    }

    localStorage.setItem(
      "velloura-wishlist",
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("velloura-wishlist-updated")
    );
  };

  const {
    id,
    name,
    brand,
    price,
    image,
    category,
  } = product;

  return (
    <article
      className={`product-card ${
        liked ? "is-wishlisted" : ""
      }`}
    >
      <div className="product-image-wrapper">
        <Link
          href={`/product/${id}`}
          className="product-image-link"
        >
          {image ? (
            <img
              src={image}
              alt={`${brand} ${name}`}
              className="product-image"
            />
          ) : (
            <div className="product-image-placeholder">
              <span>VELLOURA</span>
            </div>
          )}
        </Link>

        <button
          type="button"
          className={`wishlist-button ${
            liked ? "is-liked" : ""
          }`}
          onClick={toggleWishlist}
          aria-label={
            liked
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          <span>
            {liked ? "♥" : "♡"}
          </span>
        </button>

        <span className="product-category">
          {category || "Footwear"}
        </span>

        <button
          type="button"
          className="product-quick-add"
        >
          Quick Add
          <span>+</span>
        </button>
      </div>

      <div className="product-info">
        <div className="product-brand">
          {brand}
        </div>

        <Link
          href={`/product/${id}`}
          className="product-name"
        >
          {name}
        </Link>

        <div className="product-bottom">
          <span className="product-price">
            ${Number(price || 0).toLocaleString()}
          </span>

          <Link
            href={`/product/${id}`}
            className="product-view"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}