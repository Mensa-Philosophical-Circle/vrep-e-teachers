import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendances } from './getAttendancesSlice';
import { resetAttendance, updateAttendance } from './editAttendanceSlice';

const AttendanceLogics = () => {
  const dispatch = useDispatch();
  const getattendances = useSelector((state) => state.getattendances);
  const handleGetAttendances = () => dispatch(fetchAttendances());

  // update | create attendance
  const editattendance = useSelector((state) => state.editattendance);
  const handleEditAttendance = (data) => dispatch(updateAttendance(data));
  const handleResetAttendance = () => dispatch(resetAttendance());

  return {
    getattendances: getattendances,
    handleGetAttendances: handleGetAttendances,
    editattendance: editattendance,
    handleEditAttendance: handleEditAttendance,
    handleResetAttendance: handleResetAttendance,
  };
};

export default AttendanceLogics;
