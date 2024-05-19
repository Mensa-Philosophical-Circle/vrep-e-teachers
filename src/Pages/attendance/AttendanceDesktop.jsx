import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import TableTwo from './table-two';
import Header from '../../components/header';
import '../../styles/attendance.css';
import GenerateAvatar from '../../util/generateAvatar';
import { getMarksBadge } from '../../util/dataCalculations';
import AttendanceForm from './attendanceForm';

const AttendanceDesktop = ({ getattendances, handleEditAttendance }) => {
  const [showForm, setShowForm] = useState(false);
  const [info, setInfo] = useState({});

  const handleShowForm = (data) => {
    if (data) setInfo(data);
    setShowForm(!showForm);
  };

  const handleSubmit = (newAttandance) => {
    const data = {
      student: info.student,
      _class: info._class,
      score: newAttandance.score,
      total: newAttandance.total,
      percentage: newAttandance.percentage,
    };
    handleEditAttendance(data);
  };

  return (
    <>
      <article className="attendance-page">
        <Sidebar active="attendance" />
        <Header title="Attendance" />
        {getattendances.status === 'pending' && <div>Loading...</div>}
        {getattendances.status === 'rejected' && <div>{getattendances.error.message}</div>}
        {getattendances.status === 'fulfilled' &&
          getattendances.data.attendances.map((item) => (
            <>
              <p className="huge-text">{item._id}</p>
              {item.students.map((student) => (
                <article className="webHide">
                  <article className="student-details">
                    {student.photo ? (
                      <img src={student.photo} alt="A gray cirle" />
                    ) : (
                      <GenerateAvatar
                        profile={student}
                        width={'100%'}
                        height={'100%'}
                        fontSize={'20px'}
                      />
                    )}
                    <article className="content">
                      <h3 className="blue-text">
                        {student.first_name}
                        {student.last_name}
                      </h3>
                      <p className="gray-text">{student.reg_number}</p>
                      <p>{item._class?.name}</p>
                    </article>
                  </article>
                  <article className="attendance-grade">
                    <p className="blue-text">
                      {student.attendance.length ? student.attendance[0].percentage : 100}
                    </p>
                    <div
                      className="pie"
                      style={{
                        '--percentage': student.attendance.length
                          ? student.attendance[0].percentage
                          : 100,
                        '--main-color': getMarksBadge(
                          student.attendance.length ? student.attendance[0].percentage : 100
                        ).color,
                      }}
                    ></div>
                  </article>
                </article>
              ))}
              <article className="mobileHide">
                <TableTwo
                  data={item}
                  _class={getattendances.data._class}
                  handleShowForm={handleShowForm}
                />
              </article>
            </>
          ))}
        <AttendanceForm
          handleShowForm={handleShowForm}
          showForm={showForm}
          info={info}
          handleSubmit={handleSubmit}
        />
      </article>
    </>
  );
};

export default AttendanceDesktop;

