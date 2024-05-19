import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import searchIcon from '../../assets/images/searchicon.png';
import '../../styles/pupils.css';
import CustomFilter from '../../components/CustomFilter';
import SinglePupilCard from './SinglePupilCard';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import GenerateAvatar from '../../util/generateAvatar';

const PupilsDesktop = ({ options, getstudents, handleGetStudents, user }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1000);
    }

    // Add a listener for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Sidebar />
      {getstudents.status === 'pending' && <div>Loading...</div>}
      {getstudents.status === 'rejected' && <div>{getstudents.error.message}</div>}
      {getstudents.status === 'fulfilled' && (
        <section className="main-section pupil-section">
          <nav style={{ flexWrap: 'wrap' }}>
            <h3>Pupils</h3>
            <div className="admin-container" style={{ gap: 20, flexWrap: 'wrap' }}>
              <div className="admin-info">
                <p style={{ fontSize: '22px' }}>
                  {user.first_name} {user.last_name}
                  <span>Teacher</span>
                </p>
              </div>
              <div className="avatar-container">
                {user.photo ? (
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="avatar-image"
                    src={user.photo}
                    alt={user.first_name}
                  />
                ) : (
                  <GenerateAvatar profile={user} />
                )}
              </div>
            </div>
          </nav>
          <nav style={{ marginTop: 30, flexWrap: 'wrap' }}>
            <div className="search-container">
              <img src={searchIcon} alt="" />
              <input type="text" placeholder="Search here..." />
            </div>
            <CustomFilter
              options={options}
              width={250}
              maxHeight={70}
              defaultValue="Newest"
              handleGetStudents={handleGetStudents}
            />
          </nav>
          <div className="pupil-cards">
            {getstudents.data.map((pupil) => (
              <SinglePupilCard
                key={pupil._id}
                id={pupil._id}
                name={`${pupil.first_name} ${pupil.last_name}`}
                studentClass={pupil._class?.name}
              />
            ))}
          </div>
          <div className="pagination">
            <p style={{ color: '#A098AE', fontSize: 18, fontWeight: 400 }}>
              Showing <span style={{ color: '#303972' }}>1-5</span> from{' '}
              <span style={{ color: '#303972' }}>100</span> data
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '25%',
                alignItems: 'center',
              }}
            >
              <IoMdArrowDropleft style={{ fontSize: 30, color: '#A098AE', cursor: 'pointer' }} />
              <h3
                style={{
                  borderRadius: '50%',
                  border: '2px solid #A098AE',
                  width: 50,
                  height: 50,
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 400,
                  cursor: 'pointer',
                  paddingTop: 10,
                  backgroundColor: '#4D44B5',
                }}
              >
                1
              </h3>
              <h3
                style={{
                  borderRadius: '50%',
                  border: '2px solid #A098AE',
                  width: 50,
                  height: 50,
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 400,
                  cursor: 'pointer',
                  paddingTop: 10,
                }}
              >
                2
              </h3>
              <h3
                style={{
                  borderRadius: '50%',
                  border: '2px solid #A098AE',
                  width: 50,
                  height: 50,
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 400,
                  cursor: 'pointer',
                  paddingTop: 10,
                }}
              >
                3
              </h3>
              <IoMdArrowDropright style={{ fontSize: 30, color: '#A098AE', cursor: 'pointer' }} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PupilsDesktop;

