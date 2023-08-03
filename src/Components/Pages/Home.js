import React from "react";
import Pricing from "./Pricing";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>N.G. Computer Education | Home</title>
        <meta
          name="home"
          content="N.G. Computer Education Web site created using create-react-app"
        />
      </Helmet>
      <section id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Clean and Flexible Business Template</h1>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod <br /> tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam,
                </h2>
                <div className="buttons">
                  <a href="#" className="btn btn-learn">
                    Purchase Now
                  </a>
                  <a href="#" className="btn btn-learn">
                    View Featurese
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scrolldown">
          <a id="scroll" href="#features" className="scroll"></a>
        </div>
      </section>
      <section id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>OUR BEST SERVICES</h2>
                <p>
                  Dantes remained confused and silent by this explanation of the{" "}
                  <br /> thoughts which had unconsciously
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-xs-6 col-sm-6">
              <div className="feature-block text-center">
                <div className="icon-box">
                  <i className="ion-easel"></i>
                </div>
                <h4 className="wow fadeInUp" data-wow-delay=".3s">
                  Responsive Design
                </h4>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Lorem ipsum dolor sit amet, consectetur adipisic-
                  <br />
                  ing elit, sed do eiusmod tempor incididunt ut <br /> labore et
                  dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
            </div>
            <div className="col-md-4 col-xs-6 col-sm-6">
              <div className="feature-block text-center">
                <div className="icon-box">
                  <i className="ion-paintbucket"></i>
                </div>
                <h4 className="wow fadeInUp" data-wow-delay=".3s">
                  Outstanding Animation
                </h4>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Lorem ipsum dolor sit amet, consectetur adipisic-
                  <br />
                  ing elit, sed do eiusmod tempor incididunt ut <br /> labore et
                  dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
            </div>
            <div className="col-md-4 col-xs-6 col-sm-6">
              <div className="feature-block text-center">
                <div className="icon-box">
                  <i className="ion-paintbrush"></i>
                </div>
                <h4 className="wow fadeInUp" data-wow-delay=".3s">
                  Unlimited Colors
                </h4>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Lorem ipsum dolor sit amet, consectetur adipisic-
                  <br />
                  ing elit, sed do eiusmod tempor incididunt ut <br /> labore et
                  dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="counter">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>FUN FACTS</h2>
              <p>
                Dantes remained confused and silent by this explanation of the{" "}
                <br /> thoughts which had unconsciously
              </p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="block wow fadeInRight" data-wow-delay=".3s">
                <i className="ion-code"></i>
                <p className="count-text">
                  <span className="counter-digit">136800 </span> k
                </p>
                <p>Lines Coded</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="block wow fadeInRight" data-wow-delay=".5s">
                <i className="ion-compass"></i>
                <p className="count-text">
                  <span className="counter-digit">7800 </span> +
                </p>
                <p>Lines Coded</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="block wow fadeInRight" data-wow-delay=".7s">
                <i className="ion-compose"></i>
                <p className="count-text">
                  <span className="counter-digit">399</span>
                </p>
                <p>Lines Coded</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="block wow fadeInRight" data-wow-delay=".9s">
                <i className="ion-image"></i>
                <p className="count-text">
                  <span className="counter-digit">9995</span>
                </p>
                <p>Lines Coded</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>LATEST WORKS</h2>
                <p>
                  Dantes remained confused and silent by this explanation of the{" "}
                  <br /> thoughts which had unconsciously
                </p>
              </div>
              <div className="block">
                <div className="recent-work-mixMenu">
                  <ul>
                    <li>
                      <button className="filter" data-filter="all">
                        All
                      </button>
                    </li>
                    <li>
                      <button className="filter" data-filter=".category-2">
                        Printing
                      </button>
                    </li>
                    <li>
                      <button className="filter" data-filter=".category-1">
                        Web
                      </button>
                    </li>
                    <li>
                      <button className="filter" data-filter=".category-2">
                        Illustration
                      </button>
                    </li>
                    <li>
                      <button className="filter" data-filter=".category-1">
                        Media
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="recent-work-pic">
                  <ul id="mixed-items">
                    <li
                      className="mix category-1 col-md-4 col-xs-6"
                      data-my-order="1"
                    >
                      <a
                        className="example-image-link"
                        href="/assets/img/work1.jpg"
                        data-lightbox="example-set"
                      >
                        <img
                          className="img-responsive"
                          src="/assets/img/work1.jpg"
                          alt=""
                        />
                        <div className="overlay">
                          <h3>Web design</h3>
                          <i className="ion-ios-plus-empty"></i>
                        </div>
                      </a>
                    </li>
                    <li
                      className="mix category-2 col-md-4 col-xs-6"
                      data-my-order="2"
                    >
                      <a
                        className="example-image-link"
                        href="/assets/img/work2.jpg"
                        data-lightbox="example-set"
                      >
                        <img
                          className="img-responsive"
                          src="/assets/img/work2.jpg"
                          alt=""
                        />
                        <div className="overlay">
                          <h3>Web design</h3>
                          <i className="ion-ios-plus-empty"></i>
                        </div>
                      </a>
                    </li>
                    <li
                      className="mix category-1 col-md-4 col-xs-6"
                      data-my-order="3"
                    >
                      <a
                        className="example-image-link"
                        href="/assets/img/work3.jpg"
                        data-lightbox="example-set"
                      >
                        <img
                          className="img-responsive"
                          src="/assets/img/work3.jpg"
                          alt=""
                        />
                        <div className="overlay">
                          <h3>Web design</h3>
                          <i className="ion-ios-plus-empty"></i>
                        </div>
                      </a>
                    </li>
                    <li
                      className="mix category-2 col-md-4 col-xs-6"
                      data-my-order="4"
                    >
                      <a
                        className="example-image-link"
                        href="/assets/img/work4.jpg"
                        data-lightbox="example-set"
                      >
                        <img
                          className="img-responsive"
                          src="/assets/img/work4.jpg"
                          alt=""
                        />
                        <div className="overlay">
                          <h3>Web design</h3>
                          <i className="ion-ios-plus-empty"></i>
                        </div>
                      </a>
                    </li>
                    <li
                      className="mix category-1 col-md-4 col-xs-6"
                      data-my-order="5"
                    >
                      <a
                        className="example-image-link"
                        href="/assets/img/work5.jpg"
                        data-lightbox="example-set"
                      >
                        <img
                          className="img-responsive"
                          src="/assets/img/work5.jpg"
                          alt=""
                        />
                        <div className="overlay">
                          <h3>Web design</h3>
                          <i className="ion-ios-plus-empty"></i>
                        </div>
                      </a>
                    </li>
                    <li
                      className="mix category-2 col-md-4 col-xs-6"
                      data-my-order="6"
                    >
                      <a
                        className="example-image-link"
                        href="/assets/img/work6.jpg"
                        data-lightbox="example-set"
                      >
                        <img
                          className="img-responsive"
                          src="/assets/img/work6.jpg"
                          alt=""
                        />
                        <div className="overlay">
                          <h3>Web design</h3>
                          <i className="ion-ios-plus-empty"></i>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="play-video">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  GET THE TEMPLATE
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Dantes remained confused and silent by this explanation of the{" "}
                </p>
                <a
                  href="https://vimeo.com/channels/staffpicks/145743834"
                  className="html5lightbox"
                  data-width="800"
                  data-height="400"
                >
                  <div
                    className="button ion-ios-play-outline wow zoomIn"
                    data-wow-delay=".3s"
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>CREATIVE TEAM</h2>
              <p>
                Dantes remained confused and silent by this explanation of the{" "}
                <br /> thoughts which had unconsciously
              </p>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="block wow fadeInLeft" data-wow-delay=".3s">
                <img src="/assets/img/team-img1.jpg" alt="" />
                <div className="team-overlay">
                  <h3>
                    ROBERT SMITH <span>Product Designer</span>
                  </h3>
                  <span className="icon">
                    <i className="ion-quote"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4  col-sm-4 col-xs-6">
              <div className="block wow fadeInLeft" data-wow-delay=".6s">
                <img src="/assets/img/team-img2.jpg" alt="" />
                <div className="team-overlay">
                  <h3>
                    ROBERT SMITH <span>Product Designer</span>
                  </h3>
                  <span className="icon">
                    <i className="ion-quote"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4  col-sm-4 col-xs-6">
              <div className="block wow fadeInLeft" data-wow-delay=".9s">
                <img src="/assets/img/team-img3.jpg" alt="" />
                <div className="team-overlay">
                  <h3>
                    ROBERT SMITH <span>Product Designer</span>
                  </h3>
                  <span className="icon">
                    <i className="ion-quote"></i>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pricing />
      <section id="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Blog</h2>
                <p>
                  Dantes remained confused and silent by this explanation of the{" "}
                  <br /> thoughts which had unconsciously
                </p>
              </div>
              <div id="blog-post" className="owl-carousel">
                <div>
                  <div className="block">
                    <img
                      src="/assets/img/blog/blog-1.jpg"
                      alt=""
                      className="img-responsive"
                    />
                    <div className="content">
                      <h4>
                        <a href="blog.html">Hey,This is a blog title</a>
                      </h4>
                      <small>By admin / Sept 18, 2014</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus ex itaque repudiandae nihil qui debitis
                        atque necessitatibus aliquam, consequuntur autem!
                      </p>
                      <a href="blog.html" className="btn btn-read">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="block">
                    <img
                      src="/assets/img/blog/blog-2.jpg"
                      alt=""
                      className="img-responsive"
                    />
                    <div className="content">
                      <h4>
                        <a href="blog.html">Hey,This is a blog title</a>
                      </h4>
                      <small>By admin / Sept 18, 2014</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus ex itaque repudiandae nihil qui debitis
                        atque necessitatibus aliquam, consequuntur autem!
                      </p>
                      <a href="blog.html" className="btn btn-read">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="block">
                    <img
                      src="/assets/img/blog/blog-3.jpg"
                      alt=""
                      className="img-responsive"
                    />
                    <div className="content">
                      <h4>
                        <a href="blog.html">Hey,This is a blog title</a>
                      </h4>
                      <small>By admin / Sept 18, 2014</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus ex itaque repudiandae nihil qui debitis
                        atque necessitatibus aliquam, consequuntur autem!
                      </p>
                      <a href="blog.html" className="btn btn-read">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="block">
                    <img
                      src="/assets/img/blog/blog-4.jpg"
                      alt=""
                      className="img-responsive"
                    />
                    <div className="content">
                      <h4>
                        <a href="blog.html">Hey,This is a blog title</a>
                      </h4>
                      <small>By admin / Sept 18, 2014</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus ex itaque repudiandae nihil qui debitis
                        atque necessitatibus aliquam, consequuntur autem!
                      </p>
                      <a href="blog.html" className="btn btn-read">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="block">
                    <img
                      src="/assets/img/blog/blog-1.jpg"
                      alt=""
                      className="img-responsive"
                    />
                    <div className="content">
                      <h4>
                        <a href="blog.html">Hey,This is a blog title</a>
                      </h4>
                      <small>By admin / Sept 18, 2014</small>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusamus ex itaque repudiandae nihil qui debitis
                        atque necessitatibus aliquam, consequuntur autem!
                      </p>
                      <a href="blog.html" className="btn btn-read">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-form">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>CONTACT US</h2>
              <p>
                Dantes remained confused and silent by this explanation of the{" "}
                <br /> thoughts which had unconsciously
              </p>
            </div>
            <div className="col-md-6 col">
              <div className="map">
                <div id="googleMap"></div>
              </div>
            </div>
            <div className="col-md-6">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Message"
                ></textarea>
                <button className="btn btn-default" type="submit">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Helmet>
        <script src="/assets/js/main.js"></script>
      </Helmet>
    </>
  );
}
