/** @type {import('next').NextConfig} */

export default {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};
