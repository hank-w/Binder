import React from "react";
import { useHistory } from "react-router-dom";

const TutorCard = ({
  size = "normal",
  imageUrl,
  name,
  bio,
  isVerified,
  id,
}) => {
  const history = useHistory();

  return (
    <div
      className="bg-gray-100 cursor-pointer mb-4"
      onClick={() => history.push(`/student/browse/${id}`)}
    >
      <img src={imageUrl} className='w-10 h-10' />
      <h1>{name}</h1>
      {isVerified && <span>verified</span>}
      <div>{bio}</div>
    </div>
  );
};
export default TutorCard;
