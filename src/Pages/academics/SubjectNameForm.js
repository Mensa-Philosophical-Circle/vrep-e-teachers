import React, { useRef } from 'react';
import '../../styles/SubjectsAdd.css';

function SubjectNameForm({ onClose, hanldeCourseCreation }) {
  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    hanldeCourseCreation({ name: nameRef.current.value });
  };
  return (
    <div className="subjects-name">
      <header>
        <h2>Add Subject</h2>
        <span style={{ cursor: 'pointer' }} onClick={onClose}>
          &times;
        </span>
      </header>

      <section className="progress-section">
        <div></div>
      </section>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Name Of Subject</label>
        <input type="text" placeholder="Type Subject Name" required ref={nameRef} />
        <button style={{ cursor: 'pointer' }} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default SubjectNameForm;

