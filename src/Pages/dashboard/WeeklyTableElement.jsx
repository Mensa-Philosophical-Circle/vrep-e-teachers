import React, { useEffect, useState } from 'react';
import threedotsIcon from '../../assets/images/threedots.png';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import Modal from '../../components/Modal';
import EditScheduleForm from './EditScheduleForm';
import EditTimeForm from './EditTimeForm';
import OutsideClickHandler from 'react-outside-click-handler';
import RemovePopup from '../../components/RemovePopup';
import RemovePopupTime from '../../components/RemovePopupTime';

const WeeklyTableElement = ({
  value,
  id,
  isTime,
  handleEditTimetable,
  handleDeleteTimetable,
  edittimetable,
  resetEditTimetable,
  deletetimetable,
  resetDeleteTimetable,
  handleGetTimetable,
}) => {
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

  useEffect(() => {
    if (edittimetable.status === 'fulfilled') {
      handleGetTimetable();
      resetEditTimetable();
      setOpenModalEdit(false);
    }
  }, [edittimetable, deletetimetable]);

  useEffect(() => {
    if (deletetimetable.status === 'fulfilled') {
      handleGetTimetable();
      resetDeleteTimetable();
      setOpenModalRemove(false);
    }
  }, [deletetimetable]);

  return (
    <>
      <td>
        {value}
        {!isTime && <img src={threedotsIcon} onClick={() => setOpenEdit(!openEdit)} alt="..." />}
        {openEdit && (
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenEdit(false);
            }}
          >
            <div style={{ width: '90%', minWidth: 100, paddingRight: 20 }} id="options">
              <button
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  border: 'none',
                  width: '100%',
                  cursor: 'pointer',
                }}
                onClick={handleModalOpenEdit}
              >
                <div style={{ display: 'flex', rowGap: 50 }}>
                  <FaPencilAlt style={{ marginTop: 5, color: '#082567' }} />
                  <p
                    style={{
                      marginLeft: 'auto',
                      fontFamily: 'Poppins',
                      fontSize: 16,
                      textAlign: 'left',
                      color: '#082567',
                      width: '50%',
                    }}
                  >
                    Edit
                  </p>
                </div>
              </button>
              <button
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  border: 'none',
                  width: '100%',
                  cursor: 'pointer',
                }}
                onClick={handleModalOpenRemove}
              >
                <div style={{ display: 'flex', rowGap: 50 }}>
                  <FaTrash style={{ marginTop: 5, color: '#082567' }} />
                  <p
                    style={{
                      marginLeft: 'auto',
                      fontFamily: 'Poppins',
                      fontSize: 16,
                      textAlign: 'left',
                      color: '#082567',
                      width: '50%',
                    }}
                  >
                    Remove
                  </p>
                </div>
              </button>
            </div>
          </OutsideClickHandler>
        )}
      </td>
      {isTime ? (
        <Modal isOpen={openModalEdit} onClose={() => setOpenModalEdit(false)}>
          <EditTimeForm onClose={() => setOpenModalEdit(false)} />
        </Modal>
      ) : (
        <Modal isOpen={openModalEdit} onClose={() => setOpenModalEdit(false)}>
          {console.log(id)}
          <EditScheduleForm
            onClose={() => setOpenModalEdit(false)}
            id={id}
            isTime={isTime}
            handleEditTimetable={handleEditTimetable}
          />
        </Modal>
      )}
      {isTime ? (
        <Modal isOpen={openModalRemove} onClose={() => setOpenModalRemove(false)}>
          <RemovePopupTime onClose={() => setOpenModalRemove(false)} />
        </Modal>
      ) : (
        <Modal isOpen={openModalRemove} onClose={() => setOpenModalRemove(false)}>
          <RemovePopup
            onClose={() => setOpenModalRemove(false)}
            id={id}
            isTime={isTime}
            handleEditTimetable={handleEditTimetable}
            handleDeleteTimetable={handleDeleteTimetable}
          />
        </Modal>
      )}
      {/* <Modal isOpen={openModalRemove} onClose={() => setOpenModalRemove(false)}>
        <RemovePopup onClose={() => setOpenModalRemove(false)} />
      </Modal> */}
    </>
  );
};

export default WeeklyTableElement;

