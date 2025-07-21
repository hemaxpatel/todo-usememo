"use client";

import React, { useState, useMemo, useEffect } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  // This effect runs only on the client, after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  console.log("Parent Rendered");

  // useMemo hook to memoize the style object.
  const childStyle = useMemo(() => {
    console.log("...Recalculating Style Object...");
    return {
      backgroundColor: theme === "light" ? "#f0f9ff" : "#1e3a8a",
      borderColor: theme === "light" ? "#3b82f6" : "#93c5fd",
      textColor: theme === "light" ? "#1e3a8a" : "#eff6ff",
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`p-8 border-2 rounded-lg shadow-lg transition-colors duration-300 ${
        theme === "light"
          ? "bg-white border-blue-300"
          : "bg-gray-800 border-gray-600 text-white"
      }`}
    >
      <h1 className="text-3xl font-bold">Counter (Parent)</h1>
      <p className="text-lg my-4">
        Current Count: <span className="font-bold text-blue-500">{count}</span>
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Increment Counter
        </button>
        <button
          onClick={toggleTheme}
          className="px-6 py-2 font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600 transition-colors"
        >
          Toggle Child Theme
        </button>
      </div>

      <p className="text-sm mt-4 text-gray-500">
        Incrementing the counter updates parent state but does{" "}
        <strong className="text-red-500">NOT</strong> re-render the child.
        Toggling the theme <strong className="text-green-500">DOES</strong>{" "}
        re-render the child.
      </p>

      {/* Pass the memoized style object to the memoized child */}
      <Child style={childStyle} />
    </div>
  );
}
