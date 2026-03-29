import React from "react";

const JSXRules = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="font-bold text-2xl mb-10">JSX Rules</h2>
      <p>JSX must return a single parent element.</p>
      <p>JSX elements must be properly closed</p>
      <p>
        JSX attributes are written using camelCase (e.g., className instead of
        class)
      </p>
    </div>
  );
};

export default JSXRules;
