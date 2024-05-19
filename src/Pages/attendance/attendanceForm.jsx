import React, { useEffect, useState } from 'react';

const AttendanceForm = ({ handleShowForm, showForm, info, handleSubmit }) => {
  const [numerator, setNumerator] = useState(0);
  const [denominator, setDenominator] = useState(0);

  const handleNumeratorChange = (event) => {
    setNumerator(parseInt(event.target.value, 10));
  };

  const handleDenominatorChange = (event) => {
    setDenominator(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    setNumerator(info?.score);
    setDenominator(info?.total);
  }, [info]);

  const calculateScore = () => {
    if (denominator === 0 || !denominator || numerator > denominator) return 100;
    const score = Math.round((numerator / denominator) * 100);
    return score;
  };

  const handleNewAttandance = () => {
    if (denominator !== 0 && denominator && numerator <= denominator) {
      handleSubmit({ score: numerator, total: denominator, percentage: calculateScore() });
    }
    return handleShowForm();
  };

  return (
    <article className="popup-overlay" style={{ display: showForm ? 'block' : 'none' }}>
      <article className="popup">
        <article className="main">
          <h4>Attendance</h4>
          <article className="row">
            <p className="score">{calculateScore()}%</p>
            <p style={{ display: 'flex' }}>
              <input
                className="popup-input"
                type="number"
                value={numerator}
                onChange={handleNumeratorChange}
                style={{
                  width: 94,
                  color: '#3EDC4E',
                  border: '2px solid #C1BBEB',
                  borderRadius: 4,
                  padding: 5,
                  textAlign: 'center',
                  height: 36,
                }}
              />
              <p style={{ fontSize: 24, padding: '0 7px' }}>/</p>
              <input
                className="popup-input"
                type="number"
                value={denominator}
                onChange={handleDenominatorChange}
                style={{
                  width: 94,
                  color: '#3EDC4E',
                  border: '2px solid #C1BBEB',
                  borderRadius: 4,
                  padding: 5,
                  textAlign: 'center',
                  height: 36,
                }}
              />
            </p>
          </article>
          <article className="progress-bar-container">
            <article className="progress-bar"></article>
          </article>
        </article>
        <div
          style={{
            display: 'flex',
            width: 30,
            marginLeft: 'auto',
            marginRight: 190,
            alignItems: 'center',
          }}
        >
          <button onClick={handleShowForm}>Cancel</button>
          <button className="saveBtn" onClick={handleNewAttandance}>
            Save
          </button>
        </div>
      </article>
    </article>
  );
};

export default AttendanceForm;
