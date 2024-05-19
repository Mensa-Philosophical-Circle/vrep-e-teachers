import React, { useState, useEffect } from "react";
import profileImg from "../../assets/images/studentimageprofile.png";
import "../../styles/Students.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Sidebar from "../../components/sidebar";
import logo from "../../assets/images/logo-removebg.png";
import burgerIcon from "../../assets/images/burger-icon-white.png";

function StudentRootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1000);
    }

    // Add a listener for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <div className="pupil-profile-section">
      {isMobile ? (
        <>
          {sidebarOpen && <Sidebar />}
          <nav className="mobile-navbar">
            <section className="logo-section">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <p>RPMS</p>
            </section>
            <section className="actions-navbar">
              <div>
                <img src={burgerIcon} onClick={handleToggle} alt="burger" />
              </div>
            </section>
          </nav>
        </>
      ) : (
        <Sidebar />
      )}
      <div className="profile-container">
        <nav style={{ display: "flex" }}>
          <h2 className="profile-title-icon">
            <Link to="/pupils" style={{textDecoration: 'none', color: '#082567', paddingTop: '10px'}}>
              <AiOutlineArrowLeft className="arrow-left"/>
            </Link>
            Pupil Profile
          </h2>
          <div
            className="admin-container"
            style={{ gap: 20, flexWrap: "wrap", marginLeft: "auto" }}
          >
            <div className="admin-info" style={{ alignItems: "center" }}>
              <p style={{ marginTop: 40, fontSize: '22px' }}>
                Temz Johnson<span>Teacher</span>
              </p>
            </div>
            <div className="avatar-container"></div>
          </div>
        </nav>
        <section>
          <div className="profile-details">
            <div className="img-profile">
              <img src={profileImg} alt="" />
            </div>
            <div className="profile-info">
              <h2>Dara Ejibo</h2>
              <p>Pupil ID: TIPSG5682</p>
              <p>Gender: Male</p>
              <p>Class: Grade 4</p>
            </div>
            <div style={{ display: "flex", gap: 10, marginLeft: "auto" }}></div>
          </div>

          <div className="attendance-section">
            <h2>Attendance</h2>
            <div>
              <p className="percentage">85%</p>
              <p>
                <span className="special">85</span>/100
              </p>
            </div>
            <div className="progress-bar"></div>
          </div>
        </section>
        <div className="student-info">
          <nav>
            <NavLink to="" end>
              General
            </NavLink>
            <NavLink to="exams">Exams</NavLink>
            <NavLink to="teacher-remarks">Teachers Remark</NavLink>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default StudentRootLayout;
