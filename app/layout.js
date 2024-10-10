import "bootstrap/dist/css/bootstrap.min.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/globals.css";
import Header from "../components/Header";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
export const metadata = {
  title: "MPLS Coffee",
  description: "Find the best coffee shops in Minneapolis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="app-container">
          <Header />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
