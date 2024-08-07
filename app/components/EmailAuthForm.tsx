import React, { useState } from "react";
import Button from "./Button";

const EmailAuthForm = ({
  open,
  onClose,
  onSubmit,
  isLogin,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (email: string, password: string) => void;
  isLogin: boolean;
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
    onSubmit(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-black md:bg-mblack h-[35vh] md:h-[50vh] w-[90vw] md:w-[50vw] p-4 rounded-lg z-10 relative md:flex md:justify-center md:items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-[80%] md:w-auto"
            >
              <h1 className="text-2xl font-semibold">
                {isLogin ? "Log In" : "Sign Up"}
              </h1>
              <br />
              <label className="flex gap-4">
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="rounded-md bg-transparent border-b-2 px-1 border-white outline-none text-black"
                />
              </label>
              <br />
              <label className="flex gap-4">
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="rounded-md bg-transparent border-b-2 px-1 border-white outline-none text-black"
                />
              </label>
              <br />
              <Button>{isLogin ? "Log In" : "Sign Up"}</Button>
            </form>
            <button className="absolute top-4 right-4" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailAuthForm;
