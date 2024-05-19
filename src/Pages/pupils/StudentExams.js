import React from "react";
import SingleExamCard from "../../components/SingleExamCard";

function StudentExams() {
  const exams = [
    {
      subject: "Mathematics",
      teacher: "Mrs Faith",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: "70",
      scoredPercentage: "80",
      missed: false,
    },
    {
      subject: "English",
      teacher: "Mrs Faith",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: "70",
      scoredPercentage: "65",
      missed: false,
    },
    {
      subject: "Quantitative Reasoning",
      teacher: "Mrs Faith",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: "70",
      scoredPercentage: "0",
      missed: true,
    },
    {
      subject: "French",
      teacher: "Mrs Faith",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: "70",
      scoredPercentage: "40",
      missed: false,
    },
    {
      subject: "Computer",
      teacher: "Mrs Faith",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: "70",
      scoredPercentage: "0",
      missed: true,
    },
    {
      subject: "Civic Education",
      teacher: "Mrs Faith",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: "70",
      scoredPercentage: "0",
      missed: true,
    },
  ];
  return (
    <>
      <div className="classes-header">
        <p>Total Classes: 12</p>
        <p>Attempted: 120</p>
        <p>Unattempt: 125</p>
        <p>
          Present: <span className="approved">25</span>
        </p>
        <p>
          Failed: <span className="failed">25</span>
        </p>
      </div>
      <section className="cards-container">
        {exams.map((exam) => (
          <SingleExamCard
            subject={exam.subject}
            teacher={exam.teacher}
            time={exam.time}
            date={exam.date}
            passingPercentage={exam.passingPercentage}
            scoredPercentage={exam.scoredPercentage}
            missed={exam.missed}
          />
        ))}
      </section>
    </>
  );
}

export default StudentExams;
