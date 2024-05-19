import { useState, useEffect } from 'react';
import AttendanceDesktop from './AttendanceDesktop';
import AttendanceMobile from '../../mobile/AttendanceMobile';
import '../../App.css';
import '../../styles/attendance.css';
import AttendanceLogics from './services/attendanceLogics';
export default function Attendance() {
  const {
    getattendances,
    handleGetAttendances,
    editattendance,
    handleEditAttendance,
    handleResetAttendance,
  } = AttendanceLogics();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    handleGetAttendances();
  }, []);

  useEffect(() => {
    if (editattendance.status === 'fulfilled') {
      handleResetAttendance();
      handleGetAttendances();
    }
  }, [editattendance]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1200);
    }

    // Add a listener for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="attendance-container">
      {isMobile ? (
        <AttendanceMobile />
      ) : (
        <AttendanceDesktop
          getattendances={getattendances}
          handleEditAttendance={handleEditAttendance}
        />
      )}
    </div>
  );
}

