"use client";
import Image from "next/image";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useAuth } from "../context/AuthContext";
import { redirect } from "next/navigation";
import { useState } from "react";
import EmailAuthForm from "../components/EmailAuthForm";

const AuthPage = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const { user, loginWithGoogle, loginWithEmail, signUpWithEmail } = useAuth();
  if (user) redirect("/");

  const handleLogin = async () => {
    loginWithGoogle();
  };

  const handleEmailLogin = async (email: string, password: string) => {
    loginWithEmail(email, password);
  };
  const handleEmailSignUp = async (email: string, password: string) => {
    signUpWithEmail(email, password);
  };

  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col md:flex-row">
      <EmailAuthForm
        open={showModal}
        onClose={closeModal}
        onSubmit={isLogin ? handleEmailLogin : handleEmailSignUp}
        isLogin={isLogin}
      />
      <div className="h-full flex-1">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          height={500}
          width={500}
          className="object-cover w-full h-full object-left"
        />
      </div>
      <div className="relative flex-1 flex justify-center items-center">
        <div className="absolute -top-24  md:hidden ">
          <Logo />
        </div>
        <h1 className="absolute -top-12 md:top-8 text-base">
          Journey to a trillion miles starts from here!!
        </h1>
        <div className="border-solid border-[1px] border-white/50 bg-white/5 rounded-[20px] w-[90%] max-w-[390px] aspect-authContainer flex flex-col justify-center items-center gap-16">
          <div className="flex gap-2 flex-col">
            <h2 className="text-center font-semibold text-2xl">
              {isLogin ? "Log In" : "Sign Up"}
            </h2>
            <p className="text-center text-sm">{`Choose a ${
              isLogin ? "log in" : "sign up"
            } method`}</p>
          </div>

          <div className="flex flex-col gap-[24px]">
            <Button onClick={handleLogin}>
              <Image
                src="/images/google.svg"
                alt="Google Logo"
                height={25}
                width={25}
                className="inline mx-2"
              />
              {isLogin ? "Log In" : "Sign Up"} with Google
            </Button>
            <Button onClick={openModal}>
              <Image
                src="/images/Message.svg"
                alt="Email Logo"
                height={25}
                width={25}
                className="inline mx-2"
              />
              {isLogin ? "Log In" : "Sign Up"} with Email
            </Button>
          </div>

          <div>
            <p className="text-xs">
              {isLogin ? "Don't have an account?" : "Already a user?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-link"
              >
                {isLogin ? "Sign Up" : "Log In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
