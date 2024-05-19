import { useState } from 'react';
import calendarIcon from '../../assets/images/calendar-line-icon.png';
import EditScheduleForm from './EditScheduleForm';
import Modal from '../../components/Modal';
import WeeklyTableElement from './WeeklyTableElement';
import { timetableLogics } from '../../services';

function WeeklyTable({ gettimetable, handleGetTimetable }) {
  const {
    edittimetable,
    handleEditTimetable,
    resetEditTimetable,
    deletetimetable,
    handleDeleteTimetable,
    resetDeleteTimetable,
  } = timetableLogics();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="weekly-table">
      <h3>Termly Schedule</h3>
      <table>
        <thead>
          <tr>
            <th className="calendar-icon">
              <img src={calendarIcon} alt="" />
            </th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {gettimetable.data.map((row) => (
            <tr key={row._id}>
              <WeeklyTableElement
                value={`${row.entries[0].start_time} - ${row.entries[0].end_time}`}
                id={row.entries[0]._id}
                isTime={true}
                handleEditTimetable={handleEditTimetable}
                handleDeleteTimetable={handleDeleteTimetable}
                edittimetable={edittimetable}
                resetEditTimetable={resetEditTimetable}
                deletetimetable={deletetimetable}
                resetDeleteTimetable={resetDeleteTimetable}
                handleGetTimetable={handleGetTimetable}
              />
              {row.entries.map((entry, index) => (
                <WeeklyTableElement
                  key={index}
                  value={entry.course}
                  id={entry._id}
                  isTime={false}
                  handleEditTimetable={handleEditTimetable}
                  handleDeleteTimetable={handleDeleteTimetable}
                  edittimetable={edittimetable}
                  resetEditTimetable={resetEditTimetable}
                  deletetimetable={deletetimetable}
                  resetDeleteTimetable={resetDeleteTimetable}
                  handleGetTimetable={handleGetTimetable}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <EditScheduleForm onClose={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default WeeklyTable;

