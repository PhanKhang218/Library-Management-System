import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const alert = useAlert();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      alert.show("Vui lòng nhập username của bạn");
      return;
    }
    if (!password) {
      alert.show("Vui lòng nhập password của bạn");
      return;
    }
    axios
      .post("http://localhost:5001/api/login", { username, password })
      .then((response) => {
        alert.success("Đăng nhập thành công");
        navigate("/main");
        console.log(response);
        localStorage.setItem("account", JSON.stringify(response.data));
      })
      .catch((error) => {
        alert.error("Tên đăng nhập hoặc mật khẩu không chính xác");
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="header-login">
          <div className="header-left">
            <div className="logo">
              <img src="./img/logo.svg" alt="#" />
              <span className="title-header">LMS</span>
            </div>
          </div>
          <div className="header-right"></div>
        </div>
        <div className="content-login">
          <div className="content-left-login">
            <form className="form" id="form-1">
              <img src="./img/join.svg" alt="" />
              <h3 className="heading">WELCOME</h3>
              <div className="spacer" />
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Tên đăng nhập:
                </label>
                <input
                  type="text"
                  placeholder="VD: abc@gmail.com"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="form-message" />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="form-message" />
              </div>
              <div className="forgot-pass">
                <div>
                  <a
                    className="abc"
                    style={{ color: "black", textDecoration: "underline" }}
                    href="/register"
                  >
                    Đăng kí?
                  </a>
                </div>
                <div>
                  <a
                    className="abc"
                    style={{ color: "black", textDecoration: "underline" }}
                    href="#"
                  >
                    Quên mật khẩu
                  </a>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="form-submit"
                id="login-btn"
              >
                Đăng nhập
              </button>
            </form>
          </div>
          <div className="content-right-login">
            <img src="./img/library_bg.avif" alt="#" />
          </div>
        </div>
        <div className="footer" />
      </div>
    </div>
  );
}
