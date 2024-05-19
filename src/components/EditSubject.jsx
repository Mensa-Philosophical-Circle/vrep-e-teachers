import React, { useRef } from 'react';

const EditSubject = ({ onClose, course, handleEditCourse }) => {
  const nameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditCourse({ _id: course._id, name: nameRef.current.value });
  };
  return (
    <div>
      <div className="modal-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div style={{ display: 'flex', height: 70 }}>
            <label htmlFor="">Subject</label>
            <input type="text" placeholder="E.g Math, English" required ref={nameRef} />
          </div>
          <section style={{ display: 'flex' }}>
            <button onClick={onClose} type="button" style={{ height: 60, width: 120 }}>
              Cancel
            </button>
            <button className="btn-invert" type="submit">
              Save
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default EditSubject;

