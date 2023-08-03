import React from "react";
import * as list from "./EducationList";

export default function ProgrammingCarousel() {
  const btnEnquiry = (data) => {
    console.log("->", data);
  };
  
  return (
    <>
      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay=".5s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">
            Ms- Office <small>(Basic)</small>
          </span>
          <ul className="list-unstyled">
            {list.msOffice &&
              list.msOffice.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            onClick={() => {
              btnEnquiry("ms");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>

      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay="1s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">
            D.T.P <small>(Desk Top Publishing)</small>
          </span>
          <ul className="list-unstyled">
            {list.DTP &&
              list.DTP.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            href="#."
            onClick={() => {
              btnEnquiry("dtp");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>

      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay="1.4s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">Photo Mixing and Editing</span>
          <ul className="list-unstyled">
            {list.PS &&
              list.PS.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            href="#."
            onClick={() => {
              btnEnquiry("photomixing");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>

      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay="1.6s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">
            Certificate In Computer Concept <small>(CCC)</small>
          </span>
          <ul className="list-unstyled">
            {list.CCC &&
              list.CCC.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            href="#."
            onClick={() => {
              btnEnquiry("ccc");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>

      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay="1.6s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">C++ Programming</span>
          <ul className="list-unstyled">
            {list.CProgramming &&
              list.CProgramming.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            href="#."
            onClick={() => {
              btnEnquiry("c++");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>

      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay="1.6s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">
            Tally Accounting <small>(7.2, 9.0, ERP-9)</small>
          </span>
          <ul className="list-unstyled">
            {list.Tally &&
              list.Tally.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            href="#."
            onClick={() => {
              btnEnquiry("erp-9");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>

      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay="1.6s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">Web Designing</span>
          <ul className="list-unstyled">
            {list.webDesigning &&
              list.webDesigning.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            href="#."
            onClick={() => {
              btnEnquiry("webDesigning");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>

      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay="1.6s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">Textile Designing</span>
          <ul className="list-unstyled">
            {list.textileDesigning &&
              list.textileDesigning.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            href="#."
            onClick={() => {
              btnEnquiry("textileDesigning");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>

      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay="1.6s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">
            Diploma In Computer Application <small>(D.C.A.)</small>
          </span>
          <ul className="list-unstyled">
            {list.DCA &&
              list.DCA.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            href="#."
            onClick={() => {
              btnEnquiry("dca");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>

      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay="1.6s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">
            Post Graduate Diploma In Computer Application{" "}
            <small>(P.G.D.C.A)</small>
          </span>
          <ul className="list-unstyled">
            {list.PGDCA &&
              list.PGDCA.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            href="#."
            onClick={() => {
              btnEnquiry("pgdca");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>

      <div
        className="col-md-12 col-lg-12 col-xs-12 wow fadeInUp"
        data-wow-delay="1.6s"
      >
        <div className="plan text-center featured">
          <span className="plan-name">
            Advance Diploma In Graphic Design <small>(A.D.G.D)</small>
          </span>
          <ul className="list-unstyled">
            <dt>Corel Draw & Photo shop</dt>
            {list.corelDrawADGD &&
              list.corelDrawADGD.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
            <hr className="textile-design" />
            <dt>Textile Design</dt>
            {list.textileADGD &&
              list.textileADGD.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
          </ul>
          <a
            className="btn btn-outline-primary"
            href="#."
            onClick={() => {
              btnEnquiry("adgd");
            }}
          >
            Enquiry Now
          </a>
        </div>
      </div>
    </>
  );
}
