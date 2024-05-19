import React from "react";
import "../../styles/TeacherRemarks.css";

const TeacherRemarks = () => {
  const remarks = [
    {
      header: "Teacher’s Remark",
    },
    {
      header: "Head Teacher’s Remark",
    },
  ];

  const points = [
    {
      subject: "Punctuality",
      grade: 5,
    },
    {
      subject: "Politeness",
      grade: 5,
    },
    {
      subject: "Reading",
      grade: 5,
    },
    {
      subject: "Mental Alertness",
      grade: 5,
    },
    {
      subject: "Honesty",
      grade: 5,
    },
    {
      subject: "Verbal Fluency",
      grade: 5,
    },
    {
      subject: "Behaviour",
      grade: 5,
    },
    {
      subject: "Attitude",
      grade: 5,
    },
    {
      subject: "Musical Skills",
      grade: 5,
    },
    {
      subject: "Reliability",
      grade: 5,
    },
    {
      subject: "Self-Control",
      grade: 5,
    },
    {
      subject: "Creative Arts",
      grade: 5,
    },
    {
      subject: "Attentiveness",
      grade: 5,
    },
    {
      subject: "Teamwork Spirit",
      grade: 5,
    },
    {
      subject: "Physical Edu.",
      grade: 5,
    },
    {
      subject: "Respect",
      grade: 5,
    },
    {
      subject: "Initiatives",
      grade: 5,
    },
    {
      subject: "Gen. Reasoning",
      grade: 5,
    },
    {
      subject: "Neatness",
      grade: 5,
    },
    {
      subject: "Handwriting",
      grade: 5,
    },
    {
      subject: "Org. Ability",
      grade: 5,
    },
  ];
  return (
    <>
      <form className="teacher-remark-container">
        {remarks.map((remark) => (
          <>
            <div className="remark-header">{remark.header}</div>
            <textarea className="remark" />
          </>
        ))}
        <div className="points-container">
          {points.map((point) => (
            <span className="remark-card-container">
              <h4 className="remark-subject">{point.subject}</h4>
              <input className="remark-grade" type="number" max="5" min="0" />
            </span>
          ))}
        </div>
        <button className="teacher-remark-btn" type="submit" value="0" style={{marginBottom: 15}}>
          Save
        </button>
      </form>
    </>
  );
};

export default TeacherRemarks;
