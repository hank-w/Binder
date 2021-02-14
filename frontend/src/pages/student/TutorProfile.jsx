import React from "react";
import { useParams } from "react-router-dom";

const TutorProfile = (props) => {
  const { tutorId } = useParams();

  return (
    <>
      <h1>TutorProfile</h1>
      <span>Currently viewing tutor profile for id: {tutorId}</span>
    </>
  );
};
export default TutorProfile;
