import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

export default function Dashboard() {
  const [account, setAccount] = useState({});
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
  return (
    <div>
      <div className="dashboard">
        <center>
          <div
            style={{
              fontSize: "32px",
              marginTop: "10px",
              fontFamily: "sans-serif",
            }}
          >
            Hello{" "}
            <strong>
              {user}!<i class="bx bx-smile"></i>
            </strong>
          </div>

          <div
            style={{
              fontSize: "28px",
              paddingBottom: "10px",
            }}
          >
            Select the service you want to use
          </div>
        </center>

        <div className="wrap">
          <div className="btn-book" style={{ marginRight: "10px" }}>
            <button
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

        {/* <Sidebar /> */}
        {/* <Main /> */}
      </div>
    </div>
  );
}
