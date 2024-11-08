"use client";
export default function HomePage() {
  return (
    <>
      <header className="masthead">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-5 mb-lg-0 text-center text-lg-start">
                <h1 className="display-1 lh-1 mb-3">
                  Find the best coffee in Minneapolis & St. Paul.
                </h1>
                <p className="lead fw-normal text-muted mb-5">
                  MPLS Coffee is a coffee locator app for Minneapolis and the
                  surrounding areas. Find the best coffee shop closest to you
                  with ease.
                </p>
                <div className="d-flex flex-column flex-lg-row align-items-center">
                  <a
                    className="me-lg-3 mb-4 mb-lg-0"
                    href="https://play.google.com/store/apps/details?id=com.parkasoftware.mplscoffee"
                  >
                    <img
                      className="app-badge"
                      src="/assets/img/google-play-badge.svg"
                      alt="Download MPLS Coffee for Android"
                    />
                  </a>
                  <a href="https://apps.apple.com/us/app/mpls-coffee/id6736864166?platform=iphone">
                    <img
                      className="app-badge"
                      src="/assets/img/app-store-badge.svg"
                      alt="Download MPLS Coffee for iOS"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="masthead-device-mockup">
                <svg
                  className="circle"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="circleGradient"
                      gradientTransform="rotate(45)"
                    >
                      <stop className="gradient-start-color" offset="0%"></stop>
                      <stop className="gradient-end-color" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg
                  className="shape-1 d-none d-sm-block"
                  viewBox="0 0 240.83 240.83"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-32.54"
                    y="78.39"
                    width="305.92"
                    height="84.05"
                    rx="42.03"
                    transform="translate(120.42 -49.88) rotate(45)"
                  ></rect>
                  <rect
                    x="-32.54"
                    y="78.39"
                    width="305.92"
                    height="84.05"
                    rx="42.03"
                    transform="translate(-49.88 120.42) rotate(-45)"
                  ></rect>
                </svg>
                <svg
                  className="shape-2 d-none d-sm-block"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <div className="device-wrapper">
                  <div
                    className="device"
                    data-device="iPhoneX"
                    data-orientation="portrait"
                    data-color="black"
                  >
                    <div className="screen bg-black">
                      <img
                        src="assets/img/home.png"
                        width={"100%"}
                        height={"100%"}
                        alt="The best coffee shops in Minneapolis map view"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <aside className="text-center bg-gradient-primary-to-secondary">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
              <div className="h2 fs-1 text-white mb-4">
                Highlights coffee shops known for high-quality beans, expert
                baristas, and commitment to the art of coffee-making.
              </div>
              <img
                src="assets/img/logo.png"
                alt="..."
                style={{ height: "3rem" }}
              />
            </div>
          </div>
        </div>
      </aside>
      <section id="features">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
              <div className="container-fluid px-5">
                <div className="row gx-5">
                  <div className="col-md-6 mb-5">
                    <div className="text-center">
                      <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">Good Coffee Filter</h3>
                      <p className="text-muted mb-0">
                        Filter only coffee shops that use specialty roasters and
                        are known for good coffee
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="text-center">
                      <i className="bi-house icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">Find Nearest Coffee</h3>
                      <p className="text-muted mb-0">
                        Find the coffee shop closest to you from all over the
                        Twin Cities
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-5 mb-md-0">
                    <div className="text-center">
                      <i className="bi-cup-hot-fill icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">Free to Use</h3>
                      <p className="text-muted mb-0">
                        As always, this app is free to download and use.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                      <i className="bi-shop icon-feature text-gradient d-block mb-3"></i>
                      <h3 className="font-alt">Open Now</h3>
                      <p className="text-muted mb-0">
                        Filter by coffee shops that are open right now. So you
                        can get coffee when you need it
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-0">
              <div className="features-device-mockup">
                <svg
                  className="circle"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="circleGradient"
                      gradientTransform="rotate(45)"
                    >
                      <stop className="gradient-start-color" offset="0%"></stop>
                      <stop className="gradient-end-color" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg
                  className="shape-1 d-none d-sm-block"
                  viewBox="0 0 240.83 240.83"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-32.54"
                    y="78.39"
                    width="305.92"
                    height="84.05"
                    rx="42.03"
                    transform="translate(120.42 -49.88) rotate(45)"
                  ></rect>
                  <rect
                    x="-32.54"
                    y="78.39"
                    width="305.92"
                    height="84.05"
                    rx="42.03"
                    transform="translate(-49.88 120.42) rotate(-45)"
                  ></rect>
                </svg>
                <svg
                  className="shape-2 d-none d-sm-block"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <div className="device-wrapper">
                  <div
                    className="device"
                    data-device="iPhoneX"
                    data-orientation="portrait"
                    data-color="black"
                  >
                    <div className="screen bg-black">
                      <img
                        src="/assets/img/list_view.png"
                        width={"100%"}
                        alt="The best Minneapolis coffee shops list"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-primary-to-secondary" id="download">
        <div className="container px-5">
          <h2 className="text-center text-white font-alt mb-4">
            Get the app now!
          </h2>
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <a
              className="me-lg-3 mb-4 mb-lg-0"
              href="https://play.google.com/store/apps/details?id=com.parkasoftware.mplscoffee"
            >
              <img
                className="app-badge"
                src="/assets/img/google-play-badge.svg"
                alt="Download MPLS Coffee for Android"
              />
            </a>
            <a href="https://apps.apple.com/us/app/mpls-coffee/id6736864166?platform=iphone">
              <img
                className="app-badge"
                src="/assets/img/app-store-badge.svg"
                alt="Download MPLS Coffee for iOS"
              />
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-black text-center py-5">
        <div className="container px-5">
          <div className="text-white-50 small">
            <div className="mb-2">
              © Parka Software 2024. All Rights Reserved.
            </div>
            <span className="mx-1">·</span>
            <a href="/privacy-policy">Privacy</a>
            <span className="mx-1">·</span>
          </div>
        </div>
      </footer>
    </>
  );
}
