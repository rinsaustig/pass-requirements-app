import { useEffect, useState } from "react";
import Requirement from "./Requirement";

const Password = () => {
  const passwordReqs = [
    { label: "Has a number 0-9", isSatisfied: false },
    {
      label: "Has a special char !@#$%^&*",
      isSatisfied: false,
    },
    { label: "Has uppercase Letter", isSatisfied: false },
    { label: "Has NO consecutive letters", isSatisfied: false },
    // Add more requirements as needed
  ];
  const [password, setPassword] = useState("");
  const [reqs, setReqs] = useState(passwordReqs);
  // Hook to re-render child component if case by observing when the password changes
  useEffect(() => {
    setReqs(validatePassword());
  }, [password]);

  // Function to check if password meets requirements
  const validatePassword = () => {
    const updatedReqs = [...passwordReqs];
    updatedReqs[0].isSatisfied = /\d/.test(password);
    updatedReqs[1].isSatisfied = /[!@#$%^&*]/.test(password);
    updatedReqs[2].isSatisfied = /[A-Z]/.test(password);
    updatedReqs[3].isSatisfied = !/(.)\1/.test(password) && password.length > 1;
    // Add more requirement checks as needed
    return updatedReqs;
  };

  const handlePasswordChange = (e: { target: { value: string } }) => {
    let newPassword = e.target.value;
    //Updates de state of the password
    setPassword(newPassword);
  };

  return (
    <div className="container">
      <input value={password} onChange={handlePasswordChange} />
      <Requirement reqs={reqs} />
    </div>
  );
};

export default Password;
