import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const authDetails = JSON.parse(localStorage.getItem("loginAdminAuth"));
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleLoginButton = (e) => {
    e.preventDefault();
    if (!inputValue.email) {
      toast.dismiss();
      toast.error("Enter Email");
      return false;
    }
    if (!inputValue.password) {
      toast.dismiss();
      toast.error("Enter Password");
      return false;
    }
    toast.dismiss();
    toast.success("Login Successfully");
    navigate("/dashboard");
    localStorage.setItem("loginAdminAuth", JSON.stringify(inputValue));
  };

  useEffect(() => {
    if (authDetails && authDetails.email) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <style jsx="true">{`
        .login-form {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #cacaca !important;
        }
        .login-button {
          float: left !important;
          padding: 0 !important;
          border-radius: 0 !important;
        }
        .login-button:hover {
          background: #80d6a3 !important;
          color: #fff !important;
        }

        .container {
          background: #fff;
          width: 410px;
          padding: 30px;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        }

        form .data label {
          font-size: 18px;
        }
        form .data input {
          height: 100%;
          width: 100%;
          padding-left: 10px;
          font-size: 17px;
          border: 1px solid silver;
        }
        form .data input:focus {
          border-color: #3498db;
          border-bottom-width: 2px;
        }
        form .btn {
          margin: 30px 0;
          height: 45px;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
      `}</style>
      <section id="contact-form" className="login-form">
        <div className="container">
          <div className="title">
            <h2>Admin Login</h2>
          </div>
          <div className="center animated flipInX">
            <form>
              <div className="data">
                <label>Email or Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={inputValue && inputValue.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                />
              </div>
              <div className="data">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={inputValue && inputValue.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                />
              </div>
              <button
                className="btn btn-default login-button"
                onClick={handleLoginButton}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
