import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [wrapperActive, setWrapperActive] = useState(false);
  const btntoggle = () => {
    setWrapperActive(!wrapperActive);
  };

  return (
    <>
      <style jsx="true">{`
        #top-header {
          background-color: #f2f2f2;
          height: 40px;
          border-bottom: 1px solid #ccc;
          padding-left: 260px;
          transition: all 0.3s;
          position: fixed;
          top: 0;
          z-index: 1;
          width: 100%;
        }
        #top-header .fa-user {
          float: right;
        }
        #top-header i {
          margin: 10px 15px;
          cursor: pointer;
          font-size: 20px;
        }

        #left-menu,
        #logo {
          width: 250px;
          background-color: #2f3e4e;
          color: #fff;
        }

        #logo {
          height: 40px;
          border-bottom: 1px solid #465a6e;
          text-align: center;
          font-size: 20px;
          position: fixed;
          z-index: 15;
          transition: all 0.3s;
          top: 0;
          left: 0;
          padding: 5px;
        }
        #logo span {
          transition: all 0.3s ease;
        }
        #left-menu {
          height: 100vh;
          top: 40px;
          position: fixed;
          overflow-x: hidden;
          overflow-y: auto;
          transition: all 0.3s;
          z-index: 15;
        }

        #left-menu ul {
          padding: 0;
          margin: 0;
          padding-top: 15px;
        }
        #left-menu ul li {
          list-style-type: none;
          height: 50px;
          width: 250px;
        }

        #left-menu ul li a {
          color: #fff;
          padding: 10px 15px;
          display: inline-block;
          width: 100%;
        }
        #left-menu ul li a:hover {
          color: #f2f2f2;
        }
        #left-menu ul li.active a {
          color: #d74703;
        }
        #left-menu ul li a span {
          display: inline-block;
          vertical-align: middle;
          margin-top: -7px;
          padding-left: 10px;
          transition: all 0.3s;
        }

        #left-menu ul li a i {
          font-size: 20px;
        }
        #warraper.small-menu #logo {
          width: 60px;
          border-bottom: 1px solid transparent;
        }
        #warraper.small-menu #logo span {
          opacity: 0;
          visibility: hidden;
        }
        #warraper.small-menu #left-menu {
          width: 60px;
          top: 0;
          overflow-x: hidden;
          overflow-y: auto;
        }
        #warraper.small-menu #left-menu span {
          opacity: 0;
          visibility: hidden;
          left: 0;
        }
        #warraper.small-menu #main-content {
          margin-left: 80px;
        }
        #warraper.small-menu #top-header {
          padding-left: 70px;
        }
        #main-content {
          margin-left: 270px;
          margin-top: 20px;
          margin-right: 20px;
          transition: all 0.3s;
          margin-top: 60px;
        }
        #main-content .card {
          margin-bottom: 20px;
          padding: 15px 2px;
          border: 1px solid #cdcdcd;
        }
        #main-content .title {
          padding: 10px 0;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
        }

        #show-label-menu {
          position: fixed;
          width: 200px;
          overflow-x: hidden;
          left: 60px;
          z-index: 16;
          padding: 10px 15px;
          top: 0;
          background-color: #212c37;
          color: #fff;
          display: none;
          transition: all 0.2s;
        }

        @media only screen and (max-width: 772px) {
          #top-header #toggle-menu {
            display: none;
          }

          #logo {
            top: -50px;
          }
          #left-menu {
            width: 60px;
            top: 0;
            overflow-x: hidden;
            overflow-y: auto;
          }

          #left-menu span {
            opacity: 0;
            visibility: hidden;
          }
          #main-content {
            margin-left: 80px;
          }
          #top-header {
            padding-left: 70px;
          }
        }
      `}</style>

      <Helmet>
        <title>N.G. Computer Education | Admin Dashbaord</title>
        <meta
          name="admindashboard"
          content="N.G. Computer Education Web site created using create-react-app"
        />
      </Helmet>

      <div id="warraper" className={wrapperActive && "small-menu"}>
        <div id="logo">
          <span>N.G. Computer Education</span>
        </div>
        <span id="show-label-menu">using only small screen</span>
        <div id="left-menu">
          <ul>
            <li>
              <Link to="/dashboard">
                <i className="icon-basket"></i>
                <span>Dashbaord</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="icon-grid"></i>
                <span>Categories</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="top-header">
          <i className="fa fa-user"></i>
          <i
            id="toggle-menu"
            className="fa fa-bars icon-menu float-left"
            onClick={btntoggle}
          ></i>
        </div>
        <div id="main-content">
          <div className="card">
            <div className="container-fluid">
              <div className="title">Icons</div>
              <div className="content">
                <div className="row">Dashbaord</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
