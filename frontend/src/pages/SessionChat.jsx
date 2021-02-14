import React from "react";
import { useParams } from "react-router-dom";

const SessionChat = (props) => {
  const { sessionId } = useParams();
  return (
    <>
      <h1>SessionChat</h1>
      Currently in session id of {sessionId}
    </>
  );
};
export default SessionChat;
