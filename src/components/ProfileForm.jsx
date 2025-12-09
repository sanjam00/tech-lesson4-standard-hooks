import React, { useState, useRef, useEffect, useId } from "react";

function ProfileForm() {
  const [userName, setUserName] = useState("");

  //useRef Step 1: Create a ref for the input field
  const inputRef = useRef(null);

  //useRef Step 2: Use useEffect to focus the input field when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //useId Step 1: Generate a unique ID for the input field
  const inputId = useId();

  return (
    <div>
      <h2>Profile Form</h2>
      {/* useId Step 2: Use the generated ID in the label and input */}
      <label htmlFor={inputId}>Name:</label>
      {/* useRef Step 3: Attach the ref to the input */}
      <input
        id={inputId}
        ref={inputRef}
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>Current Name: {userName || "Guest"}</p>
    </div>
  );
}

export default ProfileForm;
