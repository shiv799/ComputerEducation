import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProgrammingCarousel from "../../utils/ProgrammingCarousel";

export default function Pricing() {
  return (
    <>
      <style jsx="true">
        {`
          /* ====================== Pricing table ============================ */
          #course {
            padding: 100px 0;
            background: #f9f9f9;
          }

          .plan {
            border: 1px solid #dedede;
            margin-bottom: 20px;
          }

          .plan-name {
            display: block;
            font-size: 24px;
            line-height: 30px;
            font-weight: 700;
            padding: 20px 0;
            color: #959595;
          }

          .plan.featured .plan-name {
            color: #323232;
          }

          .btn.btn-outline-primary {
            border: 2px solid #81c83c;
            color: #81c83c;
          }

          .featured .plan a.btn {
            background-color: #007bff;
            color: #fff;
          }

          .plan-name small {
            display: block;
            font-size: 12px;
            font-weight: 700;
            line-height: normal;
          }

          .plan ul {
            padding: 0;
            margin-bottom: 0;
          }

          .plan ul li {
            border-top: 1px dashed #dedede;
            padding: 12px 17px;
            font-weight: 500;
          }

          .plan ul li:first-child {
            border-top: 0 !important;
          }

          .plan a.btn {
            background: #fff;
            margin-top: 25px;
            margin-bottom: -20px;
            padding: 8px 30px;
            border-radius: 50px;
          }

          .plan a.btn:hover {
            color: #fff;
            background-color: #81c83c;
          }
          .textile-design {
            margin-top: 0px;
          }
        `}
      </style>
      <section id="course" className="pricing">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>Course Available</h2>
              <p>
                Dantes remained confused and silent by this explanation of the{" "}
                <br /> thoughts which had unconsciously
              </p>
            </div>
            <div className="col-md-12">
              <OwlCarousel
                infiniteloop="true"
                responsive={{
                  1: {
                    items: 1,
                  },
                  768: {
                    items: 2,
                  },
                  1000: {
                    items: 3,
                  },
                }}
                margin={10}
                loop={true}
              >
                <ProgrammingCarousel />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
