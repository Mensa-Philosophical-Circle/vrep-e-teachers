import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from './getCoursesSlice';
import { postCourse, resetCourse } from './createCourseSlice';
import { removeCourse, resetDeleteCourse } from './deleteCourseSlice';
import { resetEditCourse, updateCourse } from './editCourseSlice';

const AcademicsLogics = () => {
  const dispatch = useDispatch();
  const getcourses = useSelector((state) => state.getcourses);
  const handleGetCourses = () => dispatch(fetchCourses());

  // create course
  const createdCourse = useSelector((state) => state.createcourse);
  const hanldeCourseCreation = (course) => dispatch(postCourse(course));
  const handleResetCourse = () => dispatch(resetCourse());

  // delete course
  const deletecourse = useSelector((state) => state.deletecourse);
  const handleDeleteCourse = (course) => dispatch(removeCourse(course));
  const handleResetDelete = () => dispatch(resetDeleteCourse());

  // edit course
  const editcourse = useSelector((state) => state.editcourse);
  const handleEditCourse = (course) => dispatch(updateCourse(course));
  const handleResetEdit = () => dispatch(resetEditCourse());

  return {
    getcourses: getcourses,
    handleGetCourses: handleGetCourses,
    createdCourse: createdCourse,
    handleResetCourse: handleResetCourse,
    hanldeCourseCreation: hanldeCourseCreation,
    handleDeleteCourse: handleDeleteCourse,
    handleEditCourse: handleEditCourse,
    editcourse: editcourse,
    handleEditCourse: handleEditCourse,
    handleResetEdit: handleResetEdit,
    deletecourse: deletecourse,
    handleResetDelete: handleResetDelete,
  };
};

export default AcademicsLogics;
