import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <style jsx="true">{`
        /* 404 page */
        .page-not-found {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        .error-page .error-code {
          display: block;
          font-size: 150px;
          line-height: 150px;
          color: #333;
          margin-bottom: 20px;
          text-shadow: 5px 5px 1px rgba(0, 0, 0, 0.1);
        }

        .error-page .error-body .btn {
          margin-top: 30px;
          font-weight: 700;
        }
      `}</style>
      <section id="main-container" className="page-not-found">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="error-page text-center">
                <div className="error-code">
                  <strong>404</strong>
                </div>
                <div className="error-message">
                  <h3>Oops... Page Not Found!</h3>
                </div>
                <div className="error-body">
                  Try using the button below to go to main page of the site{" "}
                  <br />
                  {/* <Link
                    to="/"
                    className="btn btn-outline-primary blank"
                  >
                    <i className="fa fa-arrow-circle-left">&nbsp;</i> Go to Home
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
