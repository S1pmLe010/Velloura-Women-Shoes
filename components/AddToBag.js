"use client";

import { useState } from "react";

export default function AddToBag({ product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    const currentBag = JSON.parse(
      localStorage.getItem("velloura-cart") || "[]"
    );

    currentBag.push(product);

    localStorage.setItem(
      "velloura-cart",
      JSON.stringify(currentBag)
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <button
      type="button"
      className={`add-to-bag ${
        added ? "added" : ""
      }`}
      onClick={handleAdd}
    >
      {added ? "Added to bag ✓" : "Add to bag"}

      {!added && <span>→</span>}
    </button>
  );
}