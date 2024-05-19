import { useState } from "react";

import Sidebar from "../components/sidebar";
import SubjectCard from "../Pages/academics/SubjectCard";
import logo from "../assets/engi/logo-removebg.png";
import listIcon from "../assets/images/listicon.png";
import gridIcon from "../assets/images/gridicon.png";
import burgerIcon from "../assets/images/burger-icon-white.png";
import plusIcon from "../assets/images/plusicon.png";
import Modal from "../components/Modal";
import AddSubjectMobile from "./AddSubjectMobile";

function AcademicsMobile() {
  const [openModal, setOpenModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }
  const handleModalOpen = () => {
    setOpenModal(true);
  };
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
            <img src={burgerIcon} onClick={handleToggle} alt=""/>
          </div>
        </section>
      </nav>

      <div className="subjects">
        <div className="subjects-panel">
          <h3>Subjects</h3>
          <div>
            <a href="/subjectslist">
              <img src={listIcon} alt=""/>
            </a>
            <a href="/subjectspanel">
              <img src={gridIcon} alt=""/>
            </a>
          </div>
        </div>

        <div className="subject-card-container">
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </div>
        <button href="#" className="btn-invert" onClick={handleModalOpen}>
          <img src={plusIcon} alt=""/>
          New Subject
        </button>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <AddSubjectMobile onClose={() => setOpenModal(false)} />
        </Modal>
      </div>
    </>
  );
}

export default AcademicsMobile;
