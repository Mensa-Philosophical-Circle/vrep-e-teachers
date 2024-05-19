import { useRef } from 'react';
import '../../styles/EditScheduleForm.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

function EditScheduleForm({ onClose, id, handleEditTimetable }) {
  const courseRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditTimetable({ id, course: courseRef.current.value });
  };
  return (
    <div className="modal-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Subject</label>
          <input type="text" required ref={courseRef} />
        </div>
        <section>
          <button onClick={onClose} type="button">
            Cancel
          </button>
          <button className="btn-invert" type="submit">
            Save
          </button>
        </section>
      </form>
    </div>
  );
}

export default EditScheduleForm;

