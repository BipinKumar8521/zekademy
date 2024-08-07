"use client";
import Image from "next/image";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useAuth } from "../context/AuthContext";
import { redirect } from "next/navigation";

const AuthPage = () => {
  const { user, loginWithGoogle, loginWithEmail } = useAuth();
  if (user) redirect("/");

  const handleLogin = async () => {
    loginWithGoogle();
  };

  const handleEmailLogin = async () => {
    loginWithEmail("", "");
  };
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col md:flex-row">
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
            <h2 className="text-center font-semibold text-2xl">Sign Up</h2>
            <p className="text-center text-sm">Choose a sign up method</p>
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
              Sign Up with Google
            </Button>
            <Button>
              <Image
                src="/images/Message.svg"
                alt="Email Logo"
                height={25}
                width={25}
                className="inline mx-2"
              />
              Sign Up with Email
            </Button>
          </div>

          <div>
            <p className="text-xs">
              Already a user? <button className="text-link">Log In</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
