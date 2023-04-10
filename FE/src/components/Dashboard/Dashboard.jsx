import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

import "./Dashboard.css";

export default function Dashboard() {
  const [account, setAccount] = useState({});
  const alert = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("account"));
    setAccount({ ...user });
  }, []);
  let user = account[0]?.fullname;
  const handleClickToBook = () => {
    navigate("/book");
  };
  const handleClicktoTrailer = () => {
    navigate("/movie");
  };
  const handleClickToLogOut = () => {
    navigate("/");
    alert.success("Đăng xuất thành công");
  };
  return (
    <div className="dashboard-home">
      <div className="dashboard">
        <center>
          <div
            style={{
              fontSize: "32px",
              paddingTop: "10px",
              fontFamily: "sans-serif",
            }}
          >
            Hi <strong>{user}!</strong>
          </div>

          <div
            style={{
              fontWeight: "bold",
              fontSize: "26px",
              margin: "10px",
            }}
          >
            SELECT THE SERVICE YOU WANT TO USE
          </div>
        </center>

        <div className="wrap">
          <div className="btn-book" style={{ marginRight: "10px" }}>
            <button
              className="click-me"
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                margin: "20px",
                width: "60%",
              }}
              onClick={() => handleClickToBook()}
            >
              Reading Book
            </button>
          </div>

          <div className="btn-movie">
            <button
              className="click-me"
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                margin: "20px",
                width: "60%",
              }}
              onClick={() => handleClicktoTrailer()}
            >
              Watching Trailer
            </button>
          </div>
        </div>
        <div className="div-logout">
          <button className="logout" onClick={() => handleClickToLogOut()}>
            Đăng Xuất
          </button>
        </div>
      </div>
    </div>
  );
}
