import React, { useState } from "react";
import "../CSS/EmployeeList.css";
import { FaSearch } from "react-icons/fa";
import logo1 from "../images/moptro logo.png";
import logo2 from "../images/Group 46.png";
import { FaHome, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmployeeSearch = ({ employees }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let toHome = useNavigate();
  let toEmp = useNavigate();
  let toproduct = useNavigate();
  function tohome() {
    toHome("/");
  }
  const handleLogin = () => {
    toproduct("/dashboard");
  };
  function toemp() {
    toEmp("/employee");
  }

  const handleSearch = () => {
    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredEmployees);
  };

  return (
    <div className="app">
      <div className="header">
        <div className="logo1">
          <img src={logo1} alt="Logo" onClick={tohome} />
        </div>
        <div className="logo2">
          <img src={logo2} alt="Logo" />
        </div>
      </div>
      <div className="employee-search">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch size="20px" />
          </button>
        </div>

        <div className="result-container">
          {searchResults.map((employee) => (
            <div key={employee.id} className="employee-card">
              <p>Name: {employee.name}</p>
              <p>EMP ID: {employee.id}</p>
              <p>DOB: {employee.dob}</p>
              <p>Role: {employee.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <div className="home-icon" onClick={handleLogin}>
          <FaHome color="#36A546" size="28px" />
        </div>
        <div className="chat-icon" onClick={toemp}>
          <FaUser color="#36A546" size="28px" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeSearch;
