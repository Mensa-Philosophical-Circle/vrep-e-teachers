import { useState } from "react";
import Sidebar from "../components/sidebar";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/SubjectsAdd.css";

function AddSubjectMobile({ onClose }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleToggle() {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <div>
      {sidebarOpen && <Sidebar />}
      <section className="subject-add-form">
        <h2>
          Add Subject
          <AiOutlineClose onClick={onClose} />
        </h2>
        <form>
          <div>
            <label style={{ marginBottom: 20 }}>Name of Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <button type="button">Save</button>
        </form>
      </section>
    </div>
  );
}

export default AddSubjectMobile;
