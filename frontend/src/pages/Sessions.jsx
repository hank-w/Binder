import React, { useState, useEffect } from "react";

const Sessions = (props) => {
  const [mode, setMode] = useState("student"); // can be student or tutor

  const StudentMode = () => {
    return (
      <>
        <h1>This is student mode</h1>
      </>
    );
  };

  const TutorMode = () => {
    return (
      <>
        <h1>Tutored Students</h1>
      </>
    );
  };

  return (
    <div className="flex-row">
      <h1>Sessions</h1>

      <button onClick={() => setMode(mode === "student" ? "tutor" : "student")}>
        Switch to {mode === "student" ? "tutor" : "student"} mode.
      </button>

      {mode === "student" ? <StudentMode /> : <TutorMode />}
    </div>
  );
};
export default Sessions;
