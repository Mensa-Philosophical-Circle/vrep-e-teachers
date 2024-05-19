import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTimetable } from './getTimetableSlice';
import { updateTimetable, resetEdit } from './editTimetableSlice';
import { removeTimetable, resetDelete } from './deleteTimetableSlice';

const TimetableLogics = () => {
  const dispatch = useDispatch();
  // get time table
  const gettimetable = useSelector((state) => state.gettimetable);
  const handleGetTimetable = () => dispatch(fetchTimetable());

  // Edit time table
  const edittimetable = useSelector((state) => state.edittimetable);
  const handleEditTimetable = (data) => dispatch(updateTimetable(data));
  const resetEditTimetable = () => dispatch(resetEdit());

  // delete time table
  const deletetimetable = useSelector((state) => state.deletetimetable);
  const handleDeleteTimetable = (id) => dispatch(removeTimetable(id));
  const resetDeleteTimetable = () => dispatch(resetDelete());

  return {
    gettimetable: gettimetable,
    handleGetTimetable: handleGetTimetable,
    edittimetable: edittimetable,
    handleEditTimetable: handleEditTimetable,
    resetEditTimetable: resetEditTimetable,
    deletetimetable: deletetimetable,
    handleDeleteTimetable: handleDeleteTimetable,
    resetDeleteTimetable: resetDeleteTimetable,
  };
};

export default TimetableLogics;
