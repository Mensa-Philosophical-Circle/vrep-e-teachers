// AddExam.js
import React, { useState } from "react";
import searchIcon from "../../assets/images/searchicon.png";
import Sidebar from "../../components/sidebar";
import NewExamForm from "./NewExamForm";
import QuestionForm from "./QuestionForm";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/AddExam.css";

const AddExamEdit = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  const handleSave = () => {
    console.log("Form data saved:", formData);

    navigate("/exam");
  };

  const handleCancel = () => {
    setFormData(null);
    console.log("Changes canceled");

    navigate("/exam");
  };

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search" />
          <input type="text" placeholder="Search here..." />
        </div>
        <h1 className="addExamHeader">New Exam</h1>
        <hr className="addExamHr" />
        <div className="NewExamFormContainer">
          <NewExamForm index={index} onSave={(data) => setFormData(data)} />
        </div>
        <div className="NewExamQuestionsContaine">
          <QuestionForm index={index} onSave={(data) => setFormData(data)} />
        </div>
      </div>
      <div className="save-cancel">
        <button className="btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
};

export default AddExamEdit;
