import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import journalIcon from "../../assets/journal.png";
import pencilIcon from "../../assets/pencil.png";
import { Link } from "react-router-dom";
import "../../styles/exam.css";

export default function ExamWebPage({ students, loading }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localExams = JSON.parse(localStorage.getItem("exams")) || [];
    setItems(localExams);
  }, []);

  return (
    <>
      <Sidebar />
      <section className="main-section pupil-section">

        <section className="main-section">
          <nav className="navexam">
            <h3>Exams</h3>
            <p className="italic-txt">Total Number of Exams: {items.length}</p>
          </nav>
          {items.length > 0 && (
            <article className="exams">
              {items.map((item, index) => (
                <article key={index} className="row">
                  <article className="left-side">
                    <img src={journalIcon} alt="A blue book icon" />
                    <article className="content">
                      <p>{item.content?.title || "No Title Available"}</p>
                      <p>{item.content?.instructor || "No Instructor"}</p>
                      <p className="italic-txt">
                        {item.content?.dueDate || "No Due Date"}
                      </p>
                    </article>
                  </article>
                  <article className="right-side">
                    <Link to="/Addexamedit" className="row edit-exam-link">
                      <img src={pencilIcon} alt="A pencil icon" />
                      <span>Edit</span>
                    </Link>
                    <article className="row">
                      <img src={item.colorCircle} alt="Color circle" />
                      <span>{item.attempts} Attempts</span>
                    </article>
                  </article>
                </article>
              ))}
            </article>
          )}
        </section>

        <article className="footer-Exams">
          <div>
            <Link to="/Addexam" className="btn-exams add-exam-link">
              +
            </Link>
          </div>
          <div>
            <p className="add-exam">Add Exam</p>
          </div>
        </article>
      </section>
    </>
  );
}
