import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";
import Modal from "../../components/Modal";
import RemovePopup from "../../components/RemovePopup";
import EditSubject from "../../components/EditSubject";
import GenerateAvatar, {
  GenerateCourseAvatar,
} from "../../util/generateAvatar";

function SubjectCard({
  course,
  handleGetCourses,
  handleDeleteCourse,
  handleEditCourse,
  deletecourse,
  handleResetDelete,
  editcourse,
  handleResetEdit,
}) {
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
    if (deletecourse.status === "fulfilled") {
      handleResetDelete();
      handleGetCourses();
      setOpenModalRemove(false);
    }
  }, [deletecourse]);

  useEffect(() => {
    if (editcourse.status === "fulfilled") {
      handleResetEdit();
      handleGetCourses();
      setOpenModalEdit(false);
    }
  }, [editcourse]);

  return (
    <>
      <div className="subject-card">
        {console.log(course.name, "course name...")}
        <GenerateCourseAvatar
          name={course.name}
          width={"100%"}
          height={"130px"}
          borderRadius={"0px"}
          fontSize={"35px"}
        />
        <div>
          <div
            className="avatar-container"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <GenerateAvatar
              profile={{ first_name: course?.name, last_name: "" }}
              width={"100%"}
              height={"100%"}
              fontSize={"20px"}
            />
          </div>
          <h3>{course?.name}</h3>
          <BsThreeDots
            onClick={() => setOpenEdit(!openEdit)}
            style={{
              marginBottom: "auto",
              marginLeft: "auto",
              cursor: "pointer",
            }}
          />
          <span className="result-dot">
            <>
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
                          cursor: "pointer",
                        }}
                        onClick={handleModalOpenEdit}
                      >
                        <div
                          style={{
                            display: "flex",
                            rowGap: 50,
                            marginRight: "auto",
                          }}
                        >
                          <GoPencil
                            style={{ marginTop: 5, marginRight: "auto" }}
                          />
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
                          cursor: "pointer",
                        }}
                        onClick={handleModalOpenRemove}
                      >
                        <div
                          style={{
                            display: "flex",
                            rowGap: 50,
                            marginRight: "auto",
                          }}
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
            </>
          </span>
        </div>
      </div>
      <Modal isOpen={openModalRemove} onClose={() => setOpenModalRemove(false)}>
        <RemovePopup
          onClose={() => setOpenModalRemove(false)}
          id={course}
          handleDeleteTimetable={handleDeleteCourse}
        />
      </Modal>
      <Modal isOpen={openModalEdit} onClose={() => setOpenModalEdit(false)}>
        <EditSubject
          onClose={() => setOpenModalEdit(false)}
          course={course}
          handleEditCourse={handleEditCourse}
        />
      </Modal>
    </>
  );
}

export default SubjectCard;
