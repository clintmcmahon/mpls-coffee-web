import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/globals.css";
import Header from "../components/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
config.autoAddCss = false;

export const metadata = {
  title: "MPLS Coffee - Find the Best Coffee in Minneapolis & St. Paul",
  description:
    "MPLS Coffee is a coffee locator app for Minneapolis and the surrounding areas. Find the best coffee shop closest to you with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta property="og:title" content="{metadata.title}" />
        <meta property="og:description" content="{metadata.description}" />
        <meta property="og:url" content="https://mplscoffee.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mplscoffee.com/assets/img/preview.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="{metadata.title}" />
        <meta name="twitter:description" content="{metadata.description}" />
        <meta
          name="twitter:image"
          content="https://mplscoffee.com/assets/img/preview.png"
        />

        <script
          defer
          data-domain="mplscoffee.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body id="page-top">
        <div className="app-container">
          <Header />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
