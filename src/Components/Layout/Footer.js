import React from "react";

export default function Footer() {
  return (
    <>
      <style jsx="true">{`
        /* Footer
================================================== */
        .footer {
          color: #fff;
          font-size: 14px;
        }
        .footer-logo {
          margin-bottom: 20px;
        }
        .footer-map {
          padding-bottom: 60px;
        }
        .footer .subscribe {
          position: relative;
        }
        .footer .subscribe .input-group-addon {
          position: absolute;
          right: 0;
        }
        .footer .form-control:focus {
          background: none;
        }
        .footer .subscribe button:hover {
          background: none;
        }

        .footer2 {
          background: #2e2e2e;
        }

        .footer .widget-title {
          color: #fff;
        }

        .footer .social-icon {
          padding: 10px 0 20px;
        }

        /* Latest Post */
        .footer-widget .latest-post-image img {
          width: 80px;
          height: 80px;
          border-radius: 100%;
          border: 4px solid rgba(255, 255, 255, 0.5);
        }

        .footer-widget .latest-post-content h4 a {
          color: #fff;
        }

        .latest-post-items {
          margin-bottom: 10px;
        }

        .latest-post-image img {
          width: 70px;
          height: 60px;
        }

        .footer-widget .post-meta,
        .footer-widget .post-meta a {
          color: #fff;
        }

        .latest-post-content h4 {
          font-size: 14px;
          line-height: normal;
        }

        /* Image Gallery */
        .footer-widget .img-gallery {
          margin-top: 5px;
          display: inline-block;
        }

        .img-gallery a.thumb-holder {
          overflow: hidden;
          position: relative;
        }

        .img-gallery a.thumb-holder img {
          margin: 0 15px 15px 0;
          display: inline-block;
          width: 95px;
          height: 85px;
          transition: opacity 0.35s;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .img-gallery a.thumb-holder:hover img {
          opacity: 0.7;
        }

        .footer2 .img-gallery a.thumb-holder img {
          width: 90px;
          height: 75px;
        }

        /* Footer about us */
        .footer-about-us h4 {
          font-size: 16px;
          margin-bottom: 0;
          line-height: normal;
        }

        .subscribe {
          margin-top: 20px;
        }

        .subscribe input.form-control {
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .subscribe .input-group-addon {
          background: none;
          border-radius: 0;
          border: 0;
          padding: 0;
        }

        .subscribe button {
          padding: 13px 20px;
          color: #fff;
        }

        .subscribe button:hover {
          background: #222;
          color: #fff;
        }

        .subscribe button i {
          font-size: 20px;
        }

        /* Footer links */
        .footer ul li {
          color: #fff;
          padding-bottom: 10px;
          margin-bottom: 10px;
        }

        .footer ul.arrow li {
          width: 50%;
          float: left;
        }

        ul.arrow li:before {
          content: "";
          font-family: FontAwesome;
          margin-right: 10px;
        }

        .footer ul li a {
          color: #fff;
        }

        .widget-title {
          margin-bottom: 25px;
          font-size: 20px;
        }
        .latest-post-items {
          margin-bottom: 10px;
        }
        .media {
          display: flex;
          align-items: flex-start;
        }
        .media-body {
          flex: 1;
        }
        .latest-post-content h4 {
          font-size: 14px;
          line-height: normal;
        }
      `}</style>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 footer-widget mb-5 mb-lg-0">
              <h3 className="widget-title">Recent Posts</h3>
              <div className="latest-post-items media">
                <div className="latest-post-content media-body">
                  <h4>
                    <a href="#">
                      Bulgaria claims to find Europe's 'oldest town'
                    </a>
                  </h4>
                  <p className="post-meta">
                    <span className="author">Posted by John Doe</span>
                    <span className="post-meta-cat">
                      in<a href="#"> Blog</a>
                    </span>
                  </p>
                </div>
              </div>

              <div className="latest-post-items media">
                <div className="latest-post-content media-body">
                  <h4>
                    <a href="#">
                      Few Answers in Case of Murdered Law Professor
                    </a>
                  </h4>
                  <p className="post-meta">
                    <span className="date">
                      <i className="icon icon-calendar"></i> Mar 15, 2015
                    </span>
                    <span className="post-meta-comments">
                      <i className="icon icon-bubbles4"></i> <a href="#">03</a>
                    </span>
                  </p>
                </div>
              </div>

              <div className="latest-post-items media">
                <div className="latest-post-content media-body">
                  <h4>
                    <a href="#">
                      Over the year we have lots of experience in our field
                    </a>
                  </h4>
                  <p className="post-meta">
                    <span className="date">
                      <i className="icon icon-calendar"></i> Apr 17, 2015
                    </span>
                    <span className="post-meta-comments">
                      <i className="icon icon-bubbles4"></i> <a href="#">14</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-4 footer-widget mb-5 mb-lg-0"></div>
            <div className="col-md-12 col-lg-4 footer-widget footer-about-us mb-5 mb-lg-0">
              <h3 className="widget-title">About Craft</h3>
              <p>
                We are a awward winning multinational company. We believe in
                quality and standard worldwide.
              </p>
              <h4>Address</h4>
              <p>1102 Saint Marys, Junction City, KS</p>
              <div className="row">
                <div className="col-12">
                  <h4>Email:</h4>
                  <p>
                    <a href="mailto:info@craftbd.com" className="text-white">
                      info@craftbd.com
                    </a>
                  </p>
                </div>
                <div className="col-12">
                  <h4>Phone No.</h4>
                  <p>
                    <a href="tel:+(785) 238-4131" className="text-white">
                      +(785) 238-4131
                    </a>
                  </p>
                </div>
              </div>
              <form action="#" role="form">
                <div className="input-group subscribe">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required=""
                  />
                  <span className="input-group-addon">
                    <button className="btn" type="submit">
                      <i className="fa fa-envelope-o"> </i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      {/* <footer>
       <div className="container">
         <div className="row">
           <div className="col-md-12">
             <div className="block">
               <a href="#">
                 <img src="/assets/img/logo.png" alt="" />
               </a>
               <p>All rights reserved © 2015</p>
             </div>
           </div>
         </div>
       </div>
     </footer> */}
    </>
  );
}
