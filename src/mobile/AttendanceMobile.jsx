import Sidebar from "../components/sidebar";
import TableTwo from "../Pages/attendance/table-two";
import Header from "../components/header";
import searchIcon from "../assets/search.png";
import GrayAvatarImg from "../assets/gray-avatar.png";
import logo from "../assets/images/logo-removebg.png";
import burgerIcon from "../assets/images/burger-icon-white.png";
import { useEffect, useState } from "react";
import "../styles/attendance.css";

const AttendanceMobile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [numerator, setNumerator] = useState(0);
  const [denominator, setDenominator] = useState(0);

  const handleNumeratorChange = (event) => {
    setNumerator(parseInt(event.target.value, 10));
  };

  const handleDenominatorChange = (event) => {
    setDenominator(parseInt(event.target.value, 10));
  };

  const calculateScore = () => {
    if (denominator === 0) {
      return "N/A";
    }
    const score = Math.round((numerator / denominator) * 100);
    return `${score}%`;
  };

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }
  var tableData = [
    {
      id: 1,
      name: "Samanta William",
      studentNum: "#123456789",
      Attendance: { percentage: 90, mainColor: "#11A529" },
      punctuality: { value: "75%", textColor: "#303972" },
      dateRegistered: "25/06/2012",
      teacher: "Mr. Williams",
      class: "Grade 1",
    },
    {
      id: 2,
      name: "Samanta William",
      studentNum: "#123456789",
      Attendance: { percentage: 90, mainColor: "#11A529" },
      punctuality: { value: "90%", textColor: "#11A529" },
      dateRegistered: "25/06/2012",
      teacher: "Mr. Williams",
      class: "Grade 1",
    },
    {
      id: 3,
      name: "Samanta William",
      studentNum: "#123456789",
      Attendance: { percentage: 55, mainColor: "#F93333" },
      punctuality: { value: "60%", textColor: "#F93333" },
      dateRegistered: "25/06/2012",
      teacher: "Mr. Williams",
      class: "Grade 1",
    },
    {
      id: 4,
      name: "Samanta William",
      studentNum: "#123456789",
      Attendance: { percentage: 80, mainColor: "#11A529" },
      punctuality: { value: "40%", textColor: "#F93333" },
      dateRegistered: "25/06/2012",
      teacher: "Mr. Williams",
      class: "Grade 1",
    },
    {
      id: 5,
      name: "Samanta William",
      studentNum: "#123456789",
      Attendance: { percentage: 60, mainColor: "#F93333" },
      punctuality: { value: "75%", textColor: "#303972" },
      dateRegistered: "25/06/2012",
      teacher: "Mr. Williams",
      class: "Grade 1",
    },
    {
      id: 6,
      name: "Samanta William",
      studentNum: "#123456789",
      Attendance: { percentage: 40, mainColor: "#F93333" },
      punctuality: { value: "75%", textColor: "#303972" },
      dateRegistered: "25/06/2012",
      teacher: "Mr. Williams",
      class: "Grade 1",
    },
  ];

  useEffect(() => {
    const popupSaveBtn = document.querySelector("article.popup-overlay button"),
      showPopupEl = document.querySelectorAll("tr.showPopup"),
      showPopupArticle = document.querySelectorAll("article.webHide");
    popupSaveBtn.addEventListener("click", () => {
      document.querySelector("article.popup-overlay").style.display = "none";
    });
    showPopupEl.forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector("article.popup-overlay").style.display = "block";
      });
    });
    showPopupArticle.forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector("article.popup-overlay").style.display = "block";
      });
    });
  }, []);
  return (
    <>
      {sidebarOpen && <Sidebar />}
      <article className="attendance-page">
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
        <Header title="Attendance" />
        <article className="info-bar">
          <h2
            style={{
              fontFamily: "Poppins",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#303972",
              textAlign: "left",
            }}
          >
            Termly Attendance
          </h2>
          <div className="search-container">
            <button id="search-button">
              <img src={searchIcon} alt="The search icon" />
            </button>
            <input type="text" id="search-input" placeholder="Search here..." />
          </div>
        </article>
        <p className="huge-text">A</p>
        {tableData.map((student) => (
          <article className="webHide">
            <article className="student-details">
              <img src={GrayAvatarImg} alt="A gray cirle" />
              <article className="content">
                <h3 className="blue-text">{student.name}</h3>
                <p className="gray-text">{student.studentNum}</p>
                <p>{student.class}</p>
              </article>
            </article>
            <article className="attendance-grade">
              <p className="blue-text">{student.punctuality.value}</p>
              <div
                className="pie"
                style={{
                  "--percentage": tableData[0].Attendance.percentage,
                  "--main-color": tableData[0].Attendance.mainColor,
                }}
              ></div>
            </article>
          </article>
        ))}
        <article className="mobileHide">
          <TableTwo data={tableData} />
        </article>
        <p className="huge-text">B</p>
        {tableData.map((student) => (
          <article className="webHide">
            <article className="student-details">
              <img src={GrayAvatarImg} alt="A gray cirle" />
              <article className="content">
                <h3 className="blue-text">{student.name}</h3>
                <p className="gray-text">{student.studentNum}</p>
                <p>{student.class}</p>
              </article>
            </article>
            <article className="attendance-grade">
              <p className="blue-text">{student.punctuality.value}</p>
              <div
                className="pie"
                style={{
                  "--percentage": tableData[0].Attendance.percentage,
                  "--main-color": tableData[0].Attendance.mainColor,
                }}
              ></div>
            </article>
          </article>
        ))}
        <article className="mobileHide">
          <TableTwo data={tableData} />
        </article>
        <article className="popup-overlay">
          <article className="popup">
            <article className="main">
              <h4>Attendance</h4>
              <article className="row">
                <p className="score">{calculateScore()}</p>
                <p style={{ display: "flex" }}>
                  <input
                    className="popup-input"
                    type="number"
                    value={numerator}
                    onChange={handleNumeratorChange}
                    style={{
                      width: 94,
                      color: "#3EDC4E",
                      border: "2px solid #C1BBEB",
                      borderRadius: 4,
                      padding: 5,
                      textAlign: "center",
                      height: 36,
                    }}
                  />
                  <p style={{ fontSize: 24, padding: "0 7px" }}>/</p>
                  <input
                    className="popup-input"
                    type="number"
                    value={denominator}
                    onChange={handleDenominatorChange}
                    style={{
                      width: 94,
                      color: "#3EDC4E",
                      border: "2px solid #C1BBEB",
                      borderRadius: 4,
                      padding: 5,
                      textAlign: "center",
                      height: 36,
                    }}
                  />
                </p>
              </article>
              <article className="progress-bar-container">
                <article className="progress-bar"></article>
              </article>
            </article>
            <div
              style={{
                display: "flex",
                width: 30,
                marginLeft: "auto",
                marginRight: 190,
                alignItems: "center",
              }}
            >
              <button>Cancel</button>
              <button className="saveBtn">Save</button>
            </div>
          </article>
        </article>
      </article>
    </>
  );
};

export default AttendanceMobile;
