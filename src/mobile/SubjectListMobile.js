import { useState } from "react";
import "../styles/Subjects.css";

import Sidebar from "../components/sidebar";
import logo from "../assets/images/logo-removebg.png";
import listIcon from "../assets/images/listicon.png";
import gridIcon from "../assets/images/gridicon.png";
import burgerIcon from "../assets/images/burger-icon-white.png";
import plusIcon from "../assets/images/plusicon.png";
import subjectImg from "../assets/images/rectangle-subject.png";
import AddSubjectMobile from "./AddSubjectMobile";
import Modal from "../components/Modal";

function SubjectListMobile() {
  const [openModal, setOpenModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }
  const handleModalOpen = () => {
    setOpenModal(true);
  };
  return (
    <div className="subject-list-mobile">
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

      <div className="subjects">
        <div className="subjects-panel">
          <h3>Subjects</h3>
          <div>
            <a href="/subjectslist">
              <img src={listIcon} />
            </a>
            <a href="/academics">
              <img src={gridIcon} />
            </a>
          </div>
        </div>

        <div className="subjects-list">
          <ul>
            <li>
              <img src={subjectImg} />
              <div>
                <h3>English</h3>
              </div>
            </li>
            <li>
              <img src={subjectImg} />
              <div>
                <h3>English</h3>
              </div>
            </li>
            <li>
              <img src={subjectImg} />
              <div>
                <h3>English</h3>
              </div>
            </li>
          </ul>
        </div>
        <button href="#" className="btn-invert" onClick={handleModalOpen}>
          <img src={plusIcon} />
          Add Subject
        </button>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <AddSubjectMobile onClose={() => setOpenModal(false)} />
        </Modal>
      </div>
    </div>
  );
}

export default SubjectListMobile;
