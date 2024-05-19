import React from "react";
import "../styles/SubjectsAdd.css";
import deleteIcon from "../assets/images/delete-icon.png";
import addIcon from "../assets/images/addicon.png";

function SubjectTopicForm({ onClose }) {
  return (
    <div className="subjects-name">
      <header>
        <h2>Add Subject</h2>
        <span onClick={onClose}>&times;</span>
      </header>

      <section className="progress-section">
        <span>2/4</span>
        <div></div>
      </section>

      <section className="topics-section">
        <h3>Add Topics</h3>
        <div>
          <p>Topic 1</p>
          <p>Topic 2</p>
          <div>
            <button>
              <img src={addIcon} alt=""/>
            </button>
            <button>
              <img src={deleteIcon} alt=""/>
            </button>
          </div>
        </div>
        <button type="button">Proceed</button>
      </section>
    </div>
  );
}

export default SubjectTopicForm;
