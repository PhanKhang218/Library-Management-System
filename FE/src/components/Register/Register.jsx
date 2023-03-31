import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
const RegisterForm = () => {
  const [account, setAccount] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();
  const alert = useAlert();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccount((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5001/api/register",
        account,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const user = result.data;
      const { statusCode, msg } = user;
      localStorage.setItem("account", JSON.stringify(user));

      if (statusCode === 400 || statusCode === 500) {
        alert.error(msg);
      } else {
        navigate("/");
        alert.success("Đăng ký thành công!");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert.error(error.response.data.message);
      } else {
        alert.error("Có lỗi xảy ra!");
      }
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
                name="username"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Họ và tên"
                name="fullname"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Mật khẩu"
                name="password"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Xác nhận mật khẩu"
                name="confirmpassword"
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
