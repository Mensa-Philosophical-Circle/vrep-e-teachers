import React from "react";
import "../styles/ActionsHeader.css";
import { getUser } from "../hooks/useStorage";

function ActionsHeader() {
  const user = getUser();
  return (
    <div className="admin-container">
      <div className="admin-info">
        <p style={{ fontSize: "22px" }}>
          {user.first_name} {user.last_name}
          <span>Teacher</span>
        </p>
      </div>
      <img
        src={user.photo}
        alt="profile"
        style={{
          borderRadius: "50%",
          width: 50,
          height: 50,
          border: "1px solid #000"
        }}
      />
    </div>
  );
}

export default ActionsHeader;
