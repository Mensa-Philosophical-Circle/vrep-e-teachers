import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import searchIcon from "../assets/images/searchicon.png";
import "../styles/pupils.css";
import CustomFilter from "../components/CustomFilter";
import SinglePupilCard from "../Pages/pupils/SinglePupilCard";
import logo from "../assets/images/logo-removebg.png";
import burgerIcon from "../assets/images/burger-icon-white.png";
import { getUser } from "../hooks/useStorage";

const PupilsMobile = ({ options, getstudents }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = getUser();

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <>
      {sidebarOpen && <Sidebar />}
      <nav className="mobile-navbar">
        <section className="logo-section">
          <div>
            <img src={logo} />
          </div>
          <p>RPMS</p>
        </section>
        <section className="actions-navbar">
          <div>
            <img src={burgerIcon} onClick={handleToggle} />
          </div>
        </section>
      </nav>
      <section className="main-section">
        <nav style={{ flexWrap: "wrap" }}>
          <h3>Pupils</h3>
        </nav>
        <nav style={{ marginTop: 30, flexWrap: "wrap", rowGap: 20 }}>
          <div className="search-container">
            <img src={searchIcon} />
            <input type="text" placeholder="Search here..." />
          </div>
          <CustomFilter
            options={options}
            width={250}
            maxHeight={70}
            defaultValue="Newest"
          />
        </nav>
        <div className="pupil-cards">
          {getstudents?.status === "rejected" && (
            <span>{getstudents.error.message}</span>
          )}
          {getstudents?.status === "pending" && <span>loading...</span>}
          {getstudents?.status === "fulfilled" &&
            getstudents.data.map((pupil) => (
              <SinglePupilCard
                id={pupil._id}
                name={`${pupil.first_name} ${pupil.last_name}`}
                studentClass={pupil._class.name}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default PupilsMobile;
