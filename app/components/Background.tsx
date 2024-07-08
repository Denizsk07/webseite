import React from "react";

export function Background() {
  return (
    <div className="absolute inset-0 min-h-screen w-full dark:bg-gray-900 bg-gray-900 bg-dot-white/[0.1] bg-dot-gray-200/[0.1]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-900 bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
    </div>
  );
}
