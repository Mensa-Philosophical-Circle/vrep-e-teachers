import React from "react";
import "../styles/result.css";
import comingSoon from "../assets/coming-soon.png";
import { Link } from "react-router-dom";

function ExamMobile({ students, loading }) {
  return (
    <div className="result-page-container">
      <img src={comingSoon} alt="coming soon" />
      <p>This feature will be live Soon !!</p>
      <Link className="dashboard-link" to="/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default ExamMobile;
