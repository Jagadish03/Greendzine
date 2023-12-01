import React from "react";
import "../CSS/Dashboard.css";
import logo1 from "../images/moptro logo.png";
import logo2 from "../images/Group 46.png";
import { FaHome, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const days = [
    "Productivity on Monday",
    "Productivity on Tuesday",
    "Productivity on Wednesday",
    "Productivity on Thursday",
    "Productivity on Friday",
    "Productivity on Saturday",
  ];
  const metrics = [4, 92, 122, 93, 89, 98];

  let toEmp = useNavigate();

  function toemp() {
    toEmp("/employee");
  }

  return (
    <div className="app">
      <div className="header">
        <div className="logo1">
          <img src={logo1} alt="Logo" />
        </div>
        <div className="logo2">
          <img src={logo2} alt="Logo" />
        </div>
      </div>
      <div className="productivity">
        <h3>Employee Productivity Dashboard</h3>
      </div>
      <div className="main">
        {days.map((day, index) => (
          <div key={index} className="day-metric">
            <div>
              <h2>{day}</h2>
              <progress value={metrics[index]} max="100"></progress>
            </div>
            <div className="p">
              <p>{metrics[index]}%</p>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <div className="home-icon">
          <FaHome color="#36A546" size="28px" />
        </div>
        <div className="chat-icon" onClick={toemp}>
          <FaUser color="#36A546" size="28px" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
