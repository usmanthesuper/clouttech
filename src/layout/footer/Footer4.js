import Link from "next/link";

const Footer4 = ({ dark }) => {
  return (
    <footer
      className="main-footer footer-four pt-100 rel bgs-cover z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape-three.png)",
      }}
    >
      <div className="container container-1290 pb-40">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="footer-widget footer-about wow fadeInUp delay-0-2s">
              <div className="section-title mb-30">
                <h2>Awards Winning Web Agency</h2>
              </div>
              <p>Email: cloutech.1@gmail.com <br />Contact: +923148870526 </p>
              <div className="social-style-four">
                <li>
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/contact"><a>Career ?</a></Link>
                </li>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-4">
            <div className="footer-widget footer-links wow fadeInUp delay-0-4s">
              <h5 className="footer-title">Follow Me</h5>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two">
                  <li>
                    <a target="_blank" href="https://www.artstation.com/clouttech5">Artstation</a>
                  </li>
                  <li>
                    <a href="https://x.com/clouttech1?t=XfLbJSusZbE5aXohl0G1DA&s=09" target="_blank">Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" href="instagram.com/clouttech.1">Instagram</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/company/clout-tech/posts/?feedView=all">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-8">
            <div className="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
              <h5 className="footer-title">Newsletter</h5>
              <form className="footer-newsletter" action="#">
                <input type="email" placeholder="Email Address" required />
                <button type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
              <div className="footer-logo pt-15">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logos/footer-logo-white.png"
                          : "assets/images/logos/footer-logo.png"
                      }
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area text-center pt-25 pb-15 wow fadeInUp delay-0-2s">
        <div className="container">
          <p>
            Copyright @2023,{" "}
            <Link legacyBehavior href="/">
              <a>Ygency</a>
            </Link>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer4;
