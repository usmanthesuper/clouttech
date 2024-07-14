import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout footer={6} dark>
      <section className="hero-area-six pt-185 rpt-150 pb-130 rpb-100 rel z-1">
        <div className="container container-1620">
          <div className="hero-six-wrapper">
            {/* <div className="hero-social">
              <a href="#">
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a href="#">
                <i className="fab fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="#">
                <i className="fab fa-dribbble" /> <span>Dribbble</span>
              </a>
              <a href="#">
                <i className="fab fa-behance" /> <span>Behance</span>
              </a>
            </div> */}
            <div className="row no-gap">
              <div className="col-xl-4">
                <div className="left-image">
                  <img src="assets/images/hero/hero-six1.png" alt="Hero" />
                </div>
              </div>
              <div className="col-xl-4">
                <div className="hero-six-content">
                  <h1>Creative Digital Agency</h1>
                  <p>
                    Empowering your business with comprehensive services
                    tailored to your success.
                  </p>
                  <a href="services" className="theme-btn style-two">
                    Explore Services <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-xl-4 align-self-end">
                <div className="right-image">
                  <img src="assets/images/hero/hero-six2.png" alt="Hero" />
                </div>
              </div>
            </div>
            <div className="down-arrow">
              <a href="#services">
                Scroll Down <i className="fal fa-arrow-down" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Hero Section End */}
      {/* Services area start */}
      <div id="services" className="services-area-five bgc-primary pt-80 pb-50">
        <div className="container">
          <div className="services-five-wrapper">
            <div className="service-five-item" href="service-details">
              <span>Web Design</span>
              <i className="flaticon-star-symbol" />
              
            </div>
            <div className="service-five-item" href="service-details">
              <span>Digital Marketing</span>
              <i className="flaticon-star-symbol" />
              
            </div>
            <div className="service-five-item" href="service-details">
              <span>Mobile App</span>
              <i className="flaticon-star-symbol" />
            
            </div>
            <div className="service-five-item" href="service-details">
              <span>Custom Service</span>
              <i className="flaticon-star-symbol" />
            
            </div>
            <div className="service-five-item" href="service-details">
              <span>Web Development</span>
              <i className="flaticon-star-symbol" />
           
            </div>
            <div className="service-five-item" href="service-details">
              <span>SEO</span>
              <i className="flaticon-star-symbol" />
             
            </div>
            <div className="service-five-item" href="service-details">
              <span>Graphics Design</span>
              <i className="flaticon-star-symbol" />
          
            </div>
            <div className="service-five-item" href="service-details">
              <span>3D Animation</span>
              <i className="flaticon-star-symbol" />
           
            </div>
            <div className="service-five-item" href="service-details">
              <span>Branding</span>
              <i className="flaticon-star-symbol" />
              
            </div>
          </div>
        </div>
      </div>
      {/* Services Area end */}
      {/* About Us Area start */}
      <section className="about-area-six pt-130 rpt-100 pb-80 rpb-50 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-md-6">
              <div className="about-content-six mb-40 wow fadeInUp delay-0-2s">
                <div className="about-logo mb-50">
                  <img
                    src="assets/images/about/circle-text-six.svg"
                    alt="Logo"
                  />
                </div>
                <div className="section-title">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                    Our Main Goal to Satisficed Local &amp; Global Clients
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="about-image-six mb-50 wow fadeInUp delay-0-4s">
                <img src="assets/images/about/about-six.jpg" alt="About" />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="about-features mb-50 wow fadeInUp delay-0-4s">
                <div className="feature-six-item">
                  <div className="icon">
                    <i className="far fa-rocket-launch" />
                  </div>
                  <div className="content">
                    <h5>Company Mission</h5>
                    <p>
                      Our mission is to empower businesses with cutting-edge
                      digital solutions
                    </p>
                    <Link className="read-more" href="services">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="feature-six-item">
                  <div className="icon">
                    <i className="far fa-bullseye-arrow" />
                  </div>
                  <div className="content">
                    <h5>Company Vision &amp; Goals</h5>
                    <p>
                      We are dedicated to crafting digitals experiences that
                      seamlessly
                    </p>
                    <Link className="read-more" href="services">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* About Us Area end */}
      {/* Services Area start */}
      <section className="services-area-six pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-70 rmb-50 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Popular Services</span>
                <h2>We Provide Amazing Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="service-six-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fal fa-bezier-curve" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Website Design</Link>
                  </h5>
                  <p>We denounce with righteous indignation</p>
                </div>
                <a className="details-btn" href="#">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-six-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-telescope" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Digital Marketing</Link>
                  </h5>
                  <p>We denounce with righteous indignation</p>
                </div>
                <a className="details-btn" href="#">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-six-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fal fa-telescope" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Mobile Apps Design</Link>
                  </h5>
                  <p>We denounce with righteous indignation</p>
                </div>
                <a className="details-btn" href="#">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-six-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-laptop-code" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Web Development</Link>
                  </h5>
                  <p>We denounce with righteous indignation</p>
                </div>
                <a className="details-btn" href="#">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-six-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fal fa-mail-bulk" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Email &amp; Content Marketing
                    </Link>
                  </h5>
                  <p>We denounce with righteous indignation</p>
                </div>
                <a className="details-btn" href="#">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-six-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-file-contract" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Design &amp; Branding</Link>
                  </h5>
                  <p>We denounce with righteous indignation</p>
                </div>
                <a className="details-btn" href="#">
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Services Area end */}
      {/* Video Area start */}
      <div className="statistics-area pt-75 rpt-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={25} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={3} extraClass={"k"} />
                <span className="counter-title">Project’s Complete</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={48} />
                <span className="counter-title">Professionals Team Member</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Awards Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Team Area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              Creative Agency
            </span>
          </div>
        </div>
      </div>
      {/* Why Choose Us end */}
      {/* Headline area start */}
      <div className="headline-six-wrapper rel z-1 py-60 rpy-30">
        <div className="headline-area-six bgc-primary py-20 rpy-10">
          <div className="container-fluid">
            <div className="headline-wrap-two style-two">
              <span className="marquee-wrap">
                <span className="marquee-inner left">
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Digital Marketing</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Product Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Mobile Apps Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Branding Identity</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Web Optimizations</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Email Marketing</b>
                  </span>
                </span>
                <span className="marquee-inner left">
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Digital Marketing</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Product Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Mobile Apps Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Branding Identity</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Web Optimizations</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Email Marketing</b>
                  </span>
                </span>
                <span className="marquee-inner left">
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Digital Marketing</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Product Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Mobile Apps Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Branding Identity</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Web Optimizations</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Email Marketing</b>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section-five rel z-1">
        <div className="container-fluid px-0">
          <div className="row no-gap">
            <div className="col-xl-6 wow fadeInRight delay-0-2s">
              <div
                className="testimonial-five-image"
                style={{
                  backgroundImage:
                    "url(assets/images/testimonials/testimonials-five.jpg)",
                }}
              />
            </div>
            <div className="col-xl-6 align-self-center">
              <div className="testimonial-five-right p-100 py-130 rpy-100 wow fadeInLeft delay-0-2s">
                <div className="circle-logo-text w-50 mb-65 rmb-35">
                  <img
                    src="assets/images/about/circle-text.svg"
                    alt="Circle Text"
                  />
                </div>
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand
                        denounce with righteous indignation and dislike men
                        beguiled demoralized charms pleasure moments line desire
                        that they foresee pain and trouble that boon{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <hr />
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand
                        denounce with righteous indignation and dislike men
                        beguiled demoralized charms pleasure moments line desire
                        that they foresee pain and trouble that boon{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand
                        denounce with righteous indignation and dislike men
                        beguiled demoralized charms pleasure moments line desire
                        that they foresee pain and trouble that boon{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand
                        denounce with righteous indignation and dislike men
                        beguiled demoralized charms pleasure moments line desire
                        that they foresee pain and trouble that boon{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <div className="testimonial-controls mt-105 rmt-50">
                    <div className="testimonial-dots mx-0">
                      <div className="slick-dots"></div>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
