import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import "../../styles/Subjects.css";
import listIcon from "../../assets/images/listicon.png";
import gridIcon from "../../assets/images/gridicon.png";
import plusIcon from "../../assets/images/plusicon.png";
import SubjectListMobile from "../../mobile/SubjectListMobile";
import Modal from "../../components/Modal";
import SubjectNameForm from "./SubjectNameForm";
import { redirect } from "react-router-dom";
import SubjectListCard from "./SubjectListCard";

function SubjectsList() {
  const [openModal, setOpenModal] = useState(false);
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

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleRedirect = (e) => {
    redirect("/tryout");
  };

  const subjects = [
    "English",
    "Mathematics",
    "Science",
    "Physics",
    "Chemistry",
  ];

  return (
    <>
      {isMobile ? (
        <SubjectListMobile />
      ) : (
        <>
          <Sidebar />
          <section className="subjects-panel-container">
            <div className="subjects">
              <div className="subjects-panel">
                <h3>Subjects</h3>
                <div>
                  <a href="/subjectslist">
                    <img src={listIcon} alt=""/>
                  </a>
                  <a href="/academics">
                    <img src={gridIcon} alt=""/>
                  </a>
                </div>
              </div>

              <div className="subjects-list">
                <ul>
                  {subjects.map((subject) => (
                    <li>
                      <SubjectListCard name={subject} />
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ marginTop: 20, color: "#838383", fontSize: 20, fontWeight: 400 }}>
                  Number of Subjects - {subjects.length}
                </p>
                <button
                  href="#"
                  className="btn-invert"
                  onClick={handleModalOpen}
                  style={{cursor: 'pointer'}}
                >
                  <img src={plusIcon} style={{marginRight: '5px'}} alt=""/>
                  Add Subject
                </button>
              </div>
            </div>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
              <SubjectNameForm onClose={() => setOpenModal(false)} />
            </Modal>
          </section>
        </>
      )}
    </>
  );
}

export default SubjectsList;
