import React, { useState } from "react";
import threedotsIcon from "../assets/images/threedots.png";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import Modal from "./Modal";
import EditScheduleForm from "../Pages/dashboard/EditScheduleForm";
import EditTimeForm from "../Pages/dashboard/EditTimeForm";
import OutsideClickHandler from "react-outside-click-handler";
import RemovePopup from "./RemovePopup";
import RemovePopupTime from "./RemovePopupTime";

const ScheduleSubjectCard = ({ name, grade, time }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [openModalRemove, setOpenModalRemove] = useState(false);
  const handleModalOpenRemove = () => {
    setOpenModalRemove(true);
    setOpenEdit(!openEdit);
  };
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const handleModalOpenEdit = () => {
    setOpenModalEdit(true);
    setOpenEdit(!openEdit);
  };

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <h3>{name}</h3>
      <p>{grade}</p>
      <p>{time}</p>
      <img
        src={threedotsIcon}
        onClick={() => setOpenEdit(!openEdit)}
        alt="..."
        style={{
          width: 15,
          position: "relative",
          right: "-90%",
          top: "-80%",
        }}
      />
      {openEdit && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpenEdit(false);
          }}
        >
          <div
            style={{
              width: "90%",
              minWidth: 100,
              paddingRight: 20,
              position: "relative",
              width: 100,
              top: "10%",
              zIndex: 45,
              backgroundColor: "#fff",
            }}
            className="subject-card-options"
            id="options"
          >
            <button
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                border: "none",
                width: "100%",
                cursor: "pointer",
              }}
              onClick={handleModalOpenEdit}
            >
              <div style={{ display: "flex", rowGap: 50 }}>
                <FaPencilAlt style={{ marginTop: 5, color: "#082567" }} />
                <p
                  style={{
                    marginLeft: "auto",
                    fontFamily: "Poppins",
                    fontSize: 16,
                    textAlign: "left",
                    color: "#082567",
                    width: "50%",
                  }}
                >
                  Edit
                </p>
              </div>
            </button>
            <button
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                border: "none",
                width: "100%",
                cursor: "pointer",
              }}
              onClick={handleModalOpenRemove}
            >
              <div style={{ display: "flex", rowGap: 50 }}>
                <FaTrash style={{ marginTop: 5, color: "#082567" }} />
                <p
                  style={{
                    marginLeft: "auto",
                    fontFamily: "Poppins",
                    fontSize: 16,
                    textAlign: "left",
                    color: "#082567",
                    width: "50%",
                  }}
                >
                  Remove
                </p>
              </div>
            </button>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default ScheduleSubjectCard;
