import React, { useState } from "react";
import calendarIcon from "../assets/images/calendaricon.png";
import clockIcon from "../assets/images/clockicon.png";
import ExamResultDetails from "./ExamResultDetails";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function SingleExamCard({
  subject,
  teacher,
  date,
  time,
  passingPercentage,
  scoredPercentage,
  missed,
}) {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  return (
    <div className="exam-card-container">
      <div style={{ display: "flex" }}>
        <h3 style={{ maxWidth: 100 }}>{subject}</h3>
        {missed ? (
          <p
            style={{
              color: "#fff",
              backgroundColor: "#989898",
              borderRadius: 40,
              marginLeft: "auto",
              padding: "8px",
              maxHeight: 40,
            }}
          >
            Missed
          </p>
        ) : scoredPercentage >= passingPercentage ? (
          <span
            style={{
              color: "#fff",
              backgroundColor: "#11A529",
              borderRadius: 40,
              marginLeft: "auto",
              padding: "8px",
              maxHeight: 40,
            }}
          >
            Passed
          </span>
        ) : (
          <span
            style={{
              color: "#fff",
              backgroundColor: "#F93333",
              borderRadius: 40,
              marginLeft: "auto",
              padding: "8px",
              maxHeight: 40,
            }}
          >
            Failed
          </span>
        )}
      </div>
      <p>Subject Teacher : {teacher}</p>
      <p>
        <img src={calendarIcon} alt=""/>
        {date}
      </p>
      <p>
        <img src={clockIcon} alt=""/>
        {time}
      </p>
      <p className="percentage">
        Passing Percentage <span className="approved">{passingPercentage}</span>
      </p>
      <p className="percentage">
        Scored Percentage{" "}
        {scoredPercentage >= passingPercentage ? (
          <span style={{ color: "#11A529" }}>{scoredPercentage}</span>
        ) : (
          <span className="failed">{scoredPercentage}</span>
        )}
      </p>
      <Link
        style={{
          padding: "10px 24px",
          margin: "auto",
          backgroundColor: "#082567",
          color: "#fff",
          textDecoration: "none",
          borderRadius: 40,
          width: "100%",
          textAlign: "center",
          fontSize: 18,
        }}
        onClick={handleModalOpen}
        to={openModal ? "/resultDetails" : ""}
      >
        View Details
      </Link>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <ExamResultDetails onClose={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default SingleExamCard;
