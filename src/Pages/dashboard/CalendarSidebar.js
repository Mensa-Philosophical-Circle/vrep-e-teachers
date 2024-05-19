import React from 'react';
import '../../styles/CalendarSidebar.css';
import ActionsHeader from '../../components/ActionsHeader';
import CalendarTable from './CalendarTable';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import GenerateAvatar from '../../util/generateAvatar';

function CalendarSidebar({ getstudents }) {
  return (
    <div className="calendarside-container">
      <ActionsHeader />
      {getstudents.status === 'pending' && <p>Loading...</p>}
      {getstudents.status === 'rejected' && <p>{getstudents.error.message}</p>}
      {getstudents.status === 'fulfilled' && (
        <section className="recent-students">
          <h3>
            Recent Pupils<span>You have {getstudents.data?.length} pupils</span>
          </h3>
          <ul>
            {getstudents.data.slice(0, 5).map((student) => (
              <li key={student._id}>
                <p>
                  <div className="avatar-container">
                    {student.photo ? (
                      <img
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        className="avatar-image"
                        src={student.photo}
                        alt={student.first_name}
                      />
                    ) : (
                      <GenerateAvatar
                        profile={student}
                        width="48px"
                        height="48px"
                        fontSize="16px"
                      />
                    )}
                  </div>
                  {student.first_name} {student.last_name}
                  <span>{student.address}</span>
                </p>
                <Link to="../pupils/1" className="mail-icon">
                  <IoIosArrowForward fontSize={35} color="#A098AE" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <Link className="pupils-link" to="/pupils">
        View More
      </Link>
      <CalendarTable />
    </div>
  );
}

export default CalendarSidebar;

