import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/globals.css";
import Header from "../components/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata = {
  title: "MPLS Coffee - Discover the Best Coffee in Minneapolis & St. Paul",
  description:
    "Your ultimate guide to exploring the coffee shops in Minneapolis and St. Paul. Find the best coffee shops and discover unique brews.",
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
