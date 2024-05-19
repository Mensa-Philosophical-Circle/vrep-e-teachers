import React from "react";
import { Link } from "react-router-dom";

const SinglePupilCard = ({ id, name, studentClass }) => {
  return (
    <Link
      to={`/pupils/${id}`}
      className="single-result-card"
      style={{ textDecoration: "none" }}
    >
      <div className="avatar-container result-profile"></div>
      <div
        className="single-card-title"
        style={{ textAlign: "center", marginTop: 50 }}
      >
        <Link
          style={{
            color: "#303972",
            textDecoration: "none",
            fontFamily: "poppins",
            fontSize: 20,
            fontWeight: 700,
          }}
          to={`/pupils/${id}`}
        >
          {name}
        </Link>
        <p style={{ color: "#A098AE" }}>{studentClass}</p>
      </div>
    </Link>
  );
};

export default SinglePupilCard;
