import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import NewExamForm from "./NewExamForm";
import QuestionForm from "./QuestionForm";
import { useNavigate } from "react-router-dom";
import "../../styles/AddExam.css";

const AddExam = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);
  const [result, setResult] = useState(true);

  useEffect(() => {
    const localExams = JSON.parse(localStorage.getItem("exams")) || [];
    setExams(localExams);
  }, []);

  const handleSave = (formData) => {
    const newExam = {
      subject: formData.subject,
      duration: formData.duration,
      examDescription: formData.examDescription,
      scorePerQuestion: formData.scorePerQuestion,
      date: formData.date,
    };

    const updatedExams = [...exams, newExam];
    setExams(updatedExams);

    localStorage.setItem("exams", JSON.stringify(updatedExams));

    navigate("/exam");
  };

  const handleCancel = () => {
    navigate("/exam");
  };

  return (
    <div className="add-exam-container">
      <Sidebar />
      <div className="container">
        <h1 className="addExamHeader">New Exam</h1>
        <hr className="addExamHr" />
        {result ? (
          <div className="NewExamFormContainer">
            <NewExamForm onSave={handleSave} />
          </div>
        ) : (
          <div className="NewExamQuestionsContaine">
            <QuestionForm />
          </div>
        )}

        <div className="save-cancel">
          {result ? (
            <>
              <button className="btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button
                className="exam-contuine"
                onClick={() => setResult(!result)}
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <button className="btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn-save" onClick={handleSave}>
                Submit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddExam;
