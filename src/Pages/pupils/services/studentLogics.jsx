import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from './getStudentsSlice';

const StudentLogics = () => {
  const dispatch = useDispatch();
  const getstudents = useSelector((state) => state.getstudents);
  const handleGetStudents = (sortby) => dispatch(fetchStudents(sortby));

  return {
    getstudents: getstudents,
    handleGetStudents: handleGetStudents,
  };
};

export default StudentLogics;
