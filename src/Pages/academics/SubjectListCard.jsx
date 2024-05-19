import React, { useState } from "react";
import threedots from "../../assets/images/threedots.png";
import personIcon from "../../assets/images/person.png";
import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import Modal from "../../components/Modal";
import RemovePopup from "../../components/RemovePopup";
import EditSubject from "../../components/EditSubject";

const SubjectListCard = ({ name }) => {
  const [openEdit, setOpenEdit] = useState(false);
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

  return (
    <>
      <img
        src={threedots}
        className="three-dots"
        onClick={() => setOpenEdit(!openEdit)}
        style={{cursor: 'pointer'}}
        alt=""
      />
      <span className="result-dot" style={{ top: "40%" }}>
        {openEdit && (
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenEdit(false);
            }}
          >
            <div className="subject-card-options">
              <div style={{ width: "90%" }} id="options">
                <button
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    border: "none",
                    width: "100%",
                    cursor: 'pointer'
                  }}
                  onClick={handleModalOpenEdit}
                >
                  <div
                    style={{ display: "flex", rowGap: 50, marginRight: "auto" }}
                  >
                    <GoPencil style={{ marginTop: 5, marginRight: "auto" }} />
                    <p
                      style={{
                        marginLeft: 10,
                        fontFamily: "Poppins",
                        fontSize: 16,
                        alignSelf: "center",
                        textAlign: "left",
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
                    cursor: 'pointer'
                  }}
                  onClick={handleModalOpenRemove}
                >
                  <div
                    style={{ display: "flex", rowGap: 50, marginRight: "auto" }}
                  >
                    <FaRegTrashAlt style={{ marginTop: 5 }} />
                    <p
                      style={{
                        marginLeft: 15,
                        fontFamily: "Poppins",
                        fontSize: 16,
                        alignSelf: "center",
                        textAlign: "left",
                      }}
                    >
                      Remove
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </OutsideClickHandler>
        )}
      </span>
      <div className="avatar-container">
        <img src={personIcon} alt=""/>
      </div>
      <h3>{name}</h3>
      <Modal isOpen={openModalRemove} onClose={() => setOpenModalRemove(false)}>
        <RemovePopup onClose={() => setOpenModalRemove(false)} />
      </Modal>
      <Modal isOpen={openModalEdit} onClose={() => setOpenModalEdit(false)}>
        <EditSubject onClose={() => setOpenModalEdit(false)} />
      </Modal>
    </>
  );
};

export default SubjectListCard;
