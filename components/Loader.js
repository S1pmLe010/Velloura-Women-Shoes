"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="velloura-loader">
      <div className="loader-inner">
        <div className="loader-v">
          V
        </div>

        <div className="loader-brand">
          VELLOURA
        </div>

        <div className="loader-progress">
          <span />
        </div>

        <div className="loader-text">
          CURATED WITH ELEGANCE
        </div>
      </div>

      <span className="loader-number">
        01
      </span>

      <span className="loader-year">
        VELLOURA / 2026
      </span>
    </div>
  );
}