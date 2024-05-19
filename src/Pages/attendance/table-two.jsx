import React from 'react';
import '../../styles/Table.css';
import { dateFormat } from '../../lib/momentFormat';
import GenerateAvatar from '../../util/generateAvatar';
import { getMarksBadge } from '../../util/dataCalculations';

function TableTwo({ data, _class, handleShowForm }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Date Registered</th>
            <th>Attendance</th>
            <th>Percentage</th>
            <th>Teacher</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {data.students.map((student) => (
            <tr
              key={student._id}
              className="showPopup"
              onClick={() =>
                handleShowForm({
                  _class: _class._id,
                  student: student._id,
                  score: student.attendance.length ? student.attendance[0].score : 0,
                  total: student.attendance.length ? student.attendance[0].total : 0,
                  percentage: student.attendance.length ? student.attendance[0].percentage : 100,
                })
              }
            >
              <td className="table-name">
                <div className="avatar-container">
                  {student.photo ? (
                    <img src={student.photo} alt="A purple cirle" />
                  ) : (
                    <GenerateAvatar
                      profile={student}
                      width={'100%'}
                      height={'100%'}
                      fontSize={'15px'}
                    />
                  )}
                </div>
                {`${student.first_name} ${student.last_name}`}
              </td>
              <td className="table-id">{student.reg_number}</td>
              <td className="table-date">{dateFormat(student.created_at)}</td>
              <td>
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
              </td>
              <td
                className="puncText"
                style={{
                  '--text-color': getMarksBadge(
                    student.attendance.length ? student.attendance[0].percentage : 100
                  ).color,
                }}
              >
                {student.attendance.length ? student.attendance[0].percentage : 100}%
              </td>
              <td>
                {_class?.staff?.first_name} {_class?.staff?.last_name}
              </td>
              <td className="table-class">{_class?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableTwo;

