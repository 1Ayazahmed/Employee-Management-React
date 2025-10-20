import React from "react";
import { useState } from "react";

const Login = ({handleLogin}) => {
  // console.log(handleLogin);
  
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(Email, Password);
    setEmail("");
    setPassword("");
    console.log("Button CLlicked");
  };

  return (
    <>
      <div className="flex h-screen w-scree justify-center items-center text-white">
        <div className=" flex justify-center  border-red-100 border-2 rounded-xl p-20">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center gap-5"
          >
            <div className=" p-3 mb-9">
              <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-4xl dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Welcome To Employee Management
              </h2>
            </div>

            <input
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className=" w-full outline-none bg-transparent border-2 py-3 px-12 rounded-xl border-[#24cfa6] placeholder:text-gray-400 shadow-lg shadow-[#24cfa6] focus:p-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className=" w-full outline-none bg-transparent border-2 py-3 px-12 rounded-xl border-[#24cfa6] placeholder:text-gray-400 shadow-lg shadow-[#24cfa6] focus:p-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              type="password"
              placeholder="Enter your password"
            />
            <button className="mt-7 w-full bg-[#24cfa6] px-12 py-2 rounded-2xl hover:translate-y-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
