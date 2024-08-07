import React, { useState } from "react";

const EmailAuthForm = ({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (email: string, password: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    onClose();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform signup logic here
    console.log("Email:", email);
    console.log("Password:", password);
    onSubmit(email, password);
    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className=" bg-opacity-80 bg-paragraph p-4 rounded-lg z-10">
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <br />
              <button type="submit">Sign Up</button>
            </form>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailAuthForm;
