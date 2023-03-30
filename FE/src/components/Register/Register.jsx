import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
const RegisterForm = () => {
  const [account, set_user] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });

  let navigate = useNavigate();
  const alert = useAlert();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    set_user((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:5001/api/register",
      account,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const user = await result.data;
    const { statusCode, msg } = user;
    localStorage.setItem("account", JSON.stringify(user[0]));
    if (statusCode === 400 || statusCode === 500) {
      alert.error(msg);
    } else {
      navigate("/");
      alert.success("Đăng ký thành công!");
    }
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
            <form>
              <div className="register-title">
                <p className="register-account">Đăng kí tài khoản</p>
                <div className="members">
                  <span style={{ paddingRight: "10px" }}>
                    Đã là thành viên?
                  </span>
                  <a href="/" className="sign-up">
                    Đăng nhập
                  </a>
                </div>
              </div>
              <input
                type="text"
                placeholder="Tên đăng nhập"
                onChange={handleChange}
              />
              <input type="email" placeholder="Email" onChange={handleChange} />

              <input
                type="fullname"
                placeholder="Họ và tên"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                onChange={handleChange}
              />
              <input
                type="password"
                id="confirm-password"
                placeholder="Xác nhận mật khẩu"
                onChange={handleChange}
              />
              <button
                className="button-submit"
                type="submit"
                onClick={handleSubmit}
              >
                Đăng kí
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
};

export default RegisterForm;
