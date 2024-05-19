import React, { useState } from "react";
import "../../styles/AddExam.css";

const durations = [
  "1 Hour",
  "1 Hour 30 Minutes",
  "2 Hours",
  "2 Hour 30 Minutes",
  "3 Hours",
  "4 Hours",
  "5 Hours",
];

const subjects = [
  "Mathematics",
  "English",
  "Science",
  "History",
  "Geography",
  "Computer Science",
  "Art",
  "Music",
  "Physical Education",
];

const NewExamForm = ({ onSave }) => {
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [examDescription, setExamDescription] = useState("");
  const [scorePerQuestion, setScorePerQuestion] = useState("");
  const [date, setDate] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleExamDescriptionChange = (e) => {
    setExamDescription(e.target.value);
  };

  const handleScorePerQuestionChange = (e) => {
    setScorePerQuestion(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ subject, duration, examDescription, scorePerQuestion, date });
  };

  return (
    <div>
      <h2 className="form-title">Details</h2>
      <form className="exam-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <select id="subject" value={subject} onChange={handleSubjectChange}>
            <option value="">Select subject</option>
            {subjects.map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="examDescription">Exam Description:</label>
          <input
            type="text"
            id="examDescription"
            value={examDescription}
            onChange={handleExamDescriptionChange}
          />
        </div>
        <div className="form-group time-group">
          <div style={{width: '50%'}}>
            <label htmlFor="scorePerQuestion">Score Per Question:</label>
            <input
              type="text"
              id="scorePerQuestion"
              value={scorePerQuestion}
              onChange={handleScorePerQuestionChange}
            />
          </div>

          <div style={{width: '22%'}}>
            <label>Start Time</label>
            <input type="time" />
          </div>

          <div style={{width: '22%'}}>
            <label>End Time</label>
            <input type="time" />
          </div>
        </div>
        <div className="time-date">
          <div className="form-group">
            <label htmlFor="duration">Duration:</label>
            <select
              id="duration"
              value={duration}
              onChange={handleDurationChange}
            >
              <option value="">Duration</option>
              {durations.map((dur, index) => (
                <option key={index} value={dur}>
                  {dur}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewExamForm;
