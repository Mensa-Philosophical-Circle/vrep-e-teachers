import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import "../../styles/Subjects.css";
import plusIcon from "../../assets/images/plusicon.png";
import SubjectCard from "./SubjectCard";
import Modal from "../../components/Modal";
import SubjectNameForm from "./SubjectNameForm";
import { Link } from "react-router-dom";
import burgerIcon from "../../assets/images/burger-icon-white.png";
import logo from "../../assets/images/logo-removebg.png";

function SubjectsPanel({
  getcourses,
  hanldeCourseCreation,
  createdCourse,
  handleResetCourse,
  handleGetCourses,
  handleDeleteCourse,
  handleEditCourse,
  deletecourse,
  handleResetDelete,
  editcourse,
  handleResetEdit,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }

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

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    if (createdCourse.status === "fulfilled") {
      handleResetCourse();
      setOpenModal(false);
      handleGetCourses();
    }
  }, [createdCourse]);
  return (
    <>
      {isMobile ? (
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
                <img src={burgerIcon} onClick={handleToggle} alt="" />
              </div>
            </section>
          </nav>
        </>
      ) : (
        <Sidebar />
      )}
      {getcourses.status === "pending" && <div>Loading...</div>}
      {getcourses.status === "rejected" && (
        <div>{getcourses.error.message}</div>
      )}
      {getcourses.status === "fulfilled" && (
        <>
          <section className="subjects-panel-container">
            <div className="subjects">
              <div className="subjects-panel">
                <h3>Subjects</h3>
              </div>
              <div className="subject-card-container">
                {getcourses.data.map((course) => (
                  <SubjectCard
                    key={course.id}
                    course={course}
                    handleDeleteCourse={handleDeleteCourse}
                    handleEditCourse={handleEditCourse}
                    handleGetCourses={handleGetCourses}
                    deletecourse={deletecourse}
                    handleResetDelete={handleResetDelete}
                    editcourse={editcourse}
                    handleResetEdit={handleResetEdit}
                  />
                ))}
              </div>
              <button
                style={{ cursor: "pointer" }}
                href="#"
                className="btn-invert"
                onClick={handleModalOpen}
              >
                <img src={plusIcon} alt="" />
                Add Subject
              </button>
            </div>
          </section>
          <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
            <SubjectNameForm
              onClose={() => setOpenModal(false)}
              hanldeCourseCreation={hanldeCourseCreation}
            />
          </Modal>
        </>
      )}
    </>
  );
}

export default SubjectsPanel;
