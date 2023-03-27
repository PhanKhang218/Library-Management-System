import React, { useEffect, useState } from "react";
// import NavBar from "../NavBar/NavBar";

import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import "./Dashboard.css";
// import { motion } from "framer-motion";
// const cardVariants = {
//   offscreen: {
//     opacity: 0,
//     marginTop: -100,
//   },
//   onscreen: {
//     y: 0,
//     marginTop: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 3,
//     },
//   },
// };
export default function Dashboard() {
  const [account, setAccount] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("account"));
    setAccount({ ...user });
  }, []);
  return (
    <div>
      <div className="dashboard">
        {/* <Sidebar /> */}
        <Main />
      </div>
    </div>
  );
}
