import { useState, useEffect } from "react";
import "../../App.css";
import SubjectsPanel from "./SubjectsPanel";
import AcademicsLogics from "./services/academicsLogics";

function Academics() {
  const {
    getcourses,
    handleGetCourses,
    hanldeCourseCreation,
    createdCourse,
    handleResetCourse,
    handleDeleteCourse,
    deletecourse,
    handleResetDelete,
    handleEditCourse,
    editcourse,
    handleResetEdit,
  } = AcademicsLogics();

  useEffect(() => {
    handleGetCourses();
  }, []);

  return (
    <div className="academics-container">
      <SubjectsPanel
        getcourses={getcourses}
        hanldeCourseCreation={hanldeCourseCreation}
        createdCourse={createdCourse}
        handleResetCourse={handleResetCourse}
        handleGetCourses={handleGetCourses}
        handleDeleteCourse={handleDeleteCourse}
        handleEditCourse={handleEditCourse}
        deletecourse={deletecourse}
        handleResetDelete={handleResetDelete}
        editcourse={editcourse}
        handleResetEdit={handleResetEdit}
      />
    </div>
  );
}

export default Academics;
