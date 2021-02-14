import React, { useState, useEffect } from "react";

import { AiFillCheckSquare } from "react-icons/ai";

const isVerified = false;
const hasSubmittedDocs = false;

const Verify = (props) => {
  const [isVerified, setisVerified] = useState(false);
  const [hasSubmittedDocs, sethasSubmittedDocs] = useState(false);

  return (
    <div className="flex-row">
      <h1>Verification status</h1>

      {isVerified ? (
        <>
          <h2>Congrats! You've been verified as a TA</h2>
          <AiFillCheckSquare />
        </>
      ) : hasSubmittedDocs ? (
        <>
          <h2>Please wait while our associates verify your documents...</h2>
          <span>This could take a few days.</span>
          <button onClick={() => setisVerified(true)}>
            Debug only: Verify user
          </button>
        </>
      ) : (
        <>
          <h2>
            Please verify your identity by submitting documents that prove you
            are certified to teach (e.g. your transcript){" "}
          </h2>
          <input type="file" />
          <button onClick={() => sethasSubmittedDocs(true)}>Confirm</button>
        </>
      )}
    </div>
  );
};
export default Verify;
