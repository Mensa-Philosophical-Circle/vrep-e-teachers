import React from "react";
import "../styles/removePopup.css";
const RemovePopupTime = ({ onClose }) => {
  return (
    <div>
      <div className="modal-container" style={{ paddingTop: 15 }}>
        <form>
          <div style={{ display: "flex", height: 70 }}>
            <p style={{ marginTop: "auto", textAlign: "center", fontSize: 20 }}>
              Are you sure you want to remove the time?
            </p>
          </div>
          <section style={{ display: "flex", margin: "auto" }}>
            <button
              onClick={onClose}
              type="button"
              style={{ height: 60, width: 120, cursor: "pointer" }}
            >
              No
            </button>
            <button
              className="btn-invert"
              type="button"
              style={{ width: 120, cursor: "pointer" }}
            >
              Yes
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default RemovePopupTime;
