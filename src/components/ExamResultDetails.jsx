import React from "react";
import profileImg from "../assets/images/studentimageprofile.png";
import { MdClose } from "react-icons/md";

function ExamResultDetails({ onClose }) {
  return (
    <>
      <div style={{ backgroundColor: "#f2f4ff", width: "100%", padding: "1.4rem 1.5rem 4.5rem 1.5rem", display: "flex", maxWidth: "100%", flexDirection: "column", borderRadius: 40 }}>
        <div style={{ display: "flex" }}>
          <MdClose onClick={onClose} style={{ marginLeft: "auto", marginBottom: "auto", width: 30, height: 30 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", gap: 30, marginTop: 20, color: "#3C3C3C", fontFamily: "Inter", fontSize: 32, padding: "7px 22px" }}>
          <h3>
            Exam Result Details
          </h3>
          <p style={{ marginRight: "auto", borderRadius: 40, backgroundColor: "#ecf2ff", padding: "5px 10px", fontSize: 16 }}>
            Result Declared on 12:30 AM | 22 September 2023
          </p>
        </div>
        <div style={{ marginTop: 30, display: "flex", gap: 30, padding: "0 22px", flexWrap: "wrap" }}>
          <div>
            <img style={{ width: 48, height: 48, borderRadius: 40 }} src={profileImg} alt="profile" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <p>
              Dara Ejibo
            </p>
            <p>
              Pupil ID : TIPSG5682
            </p>
            <p>
              Gender : Male
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 15, marginLeft: "7rem" }}>
            <p>
              Class : Grade  4
            </p>
            <p>
              Subject : Mathematics
            </p>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: 50, alignItems: "center", padding: "0 22px" }}>
            <p style={{ color: "#3C3C3C", fontFamily: "Inter", fontSize: 25 }}>Mathematics Exam.</p>
            <p style={{ color: "#0B956B", fontFamily: "Inter", fontSize: 16, backgroundColor: "#ecffee", borderRadius: 40, padding: "8px 25px" }}>Passed</p>
          </div>
          <div style={{ padding: "0 22px", display: "flex", alignItems: "center", gap: 30, marginTop: 20 }}>
            <p>12:40 P:M</p>
            <p>03 Jan 2023</p>
          </div>
        </div>
        <div style={{ padding: "0 22px", display: "flex", alignItems: "center", gap: 30, marginTop: 40 }}>
          <p>
            Student’s Score : <span style={{
              color: "#44CCA3",
              fontFamily: "Inter",
              fontSize: "24"
            }}>32/50</span>
          </p>
          <br />
          <p>
            Student’s Percentage <span style={{
              color: "#44CCA3",
              fontFamily: "Inter",
              fontSize: "24"
            }}>64%</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ExamResultDetails;
