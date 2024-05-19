import { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import ScheduleSubjectCard from "./ScheduleSubjectCard";

function DayScheduleCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [openModalRemove, setOpenModalRemove] = useState(false);
  const handleModalOpenRemove = () => {
    setOpenModalRemove(true);
    setOpenEdit(!openEdit);
  };
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const handleModalOpenEdit = () => {
    setOpenModalEdit(true);
    setOpenEdit(!openEdit);
  };

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const subjectData = [
    {
      name: "Physics",
      grade: "Grade 6",
      time: "8:00-9:00",
    },
    {
      name: "Physics",
      grade: "Grade 6",
      time: "8:00-9:00",
    },
    {
      name: "Physics",
      grade: "Grade 6",
      time: "8:00-9:00",
    },
    {
      name: "Physics",
      grade: "Grade 6",
      time: "8:00-9:00",
    },
    {
      name: "Physics",
      grade: "Grade 6",
      time: "8:00-9:00",
    },
    {
      name: "Physics",
      grade: "Grade 6",
      time: "8:00-9:00",
    },
    {
      name: "Physics",
      grade: "Grade 6",
      time: "8:00-9:00",
    },
    {
      name: "Physics",
      grade: "Grade 6",
      time: "8:00-9:00",
    },
  ];
  return (
    <>
      <li>
        <p>
          {props.day}
          <span>8:00-15:00</span>
        </p>
        {isOpen ? (
          <MdOutlineKeyboardArrowUp
            onClick={handleToggle}
            style={{ fontSize: 29 }}
          />
        ) : (
          <MdOutlineKeyboardArrowDown
            onClick={handleToggle}
            style={{ fontSize: 29 }}
          />
        )}
      </li>
      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <section>
            {subjectData.map((subject) => (
              <ScheduleSubjectCard
                name={subject.name}
                grade={subject.grade}
                time={subject.time}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
}

export default DayScheduleCard;
