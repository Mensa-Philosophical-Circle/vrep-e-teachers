import React from "react";
import "../styles/SubjectsAdd.css";

function SubjectConfirm({ onClose }) {
  return (
    <div className="subjects-name">
      <header>
        <h2>Add Subject</h2>
        <span onClick={onClose}>&times;</span>
      </header>

      <section className="progress-section">
        <span>4/4</span>
        <div></div>
      </section>

      <section className="confirm-section">
        <h3>
          Following Subject will be created <span>Mathematics</span>
        </h3>

        <ol>
          <h3>With the following Topics:</h3>
          <li>Numbers</li>
          <li>Sets</li>
          <li>Addition of Numbers</li>
          <li>Subtraction of Numbers</li>
          <li>Division of Numbers</li>
          <li>Multiplication of Numbers</li>
        </ol>

        <button type="button">Confirm</button>
      </section>
    </div>
  );
}

export default SubjectConfirm;
