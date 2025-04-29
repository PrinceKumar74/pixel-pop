import React, { useEffect, useState } from "react";

const Loader = ({ children }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [removeLoader, setRemoveLoader] = useState(false);

  useEffect(() => {
    // Create a promise that resolves after 1 second
    const minDisplayTime = new Promise((resolve) => setTimeout(resolve, 1000));

    // Create a promise that resolves when the document is fully loaded
    const pageLoad = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve, { once: true });
      }
    });

    // Wait for both the minimum time AND the page load to finish
    Promise.all([minDisplayTime, pageLoad]).then(() => {
      setLoadingComplete(true);
    });
  }, []);

  // Once the transition ends, remove the loader from the DOM.
  const handleTransitionEnd = () => {
    if (loadingComplete) setRemoveLoader(true);
  };

  return (
    <>
      {/* Loader */}
      {!removeLoader && (
        <div
          className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-50 transition-opacity duration-1000 ${
            loadingComplete ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="relative">
            <img
              src="/pixelLoader.png"
              alt="pixelLoader image"
              className={`w-16 h-auto sm:w-24 md:w-32 lg:w-40 max-w-xs relative z-10 ${
                loadingComplete ? "animate-expand-glow" : "animate-pulse-glow"
              }`}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`w-full h-full transition-opacity duration-300 ${
          loadingComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Loader;