// Import necessary libraries
import React, { useContext, useState } from "react";
import { Context } from "../Auth/Context";
import { Navbar } from "../Navbar/Navbar";
import loginImg2 from "../../assets/login-removebg.png";
import { useToast } from "@chakra-ui/react";
import { Link , useNavigate } from "react-router-dom";

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    if (newPassword.length <= 8) {
      setPassword(newPassword);
    }
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();


    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");


    if (storedEmail === email && storedPassword === password) {

      setIsAuth(true);


      toast({
        title: "Login Successful",
        status: "success",
        duration: 2000,
        isClosable: true,
      });


      navigate("/shop");
    } else {

      toast({
        title: "Login Failed",
        description: "Invalid email or password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-x-hidden">
      {/* Hide the image on smaller and medium screens */}
      <div className="hidden sm:block md:block lg:block w-[40%]">
        <img className="w-full h-[90%]" src={loginImg2} alt="" />
      </div>

      <div className="w-[60%] sm:w-[80%] md:w-[60%] lg:w-[60%] p-8">
        <h1 className="text-3xl font-bold mb-8">Welcome Back!</h1>

        {/* Form for login */}
        <form className="flex flex-col items-center" onSubmit={handleLoginFormSubmit}>
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter Your Email"
            className="border p-2 mb-4 w-full"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Your Password"
            className="border p-2 mb-4 w-full"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <button className="p-2 rounded bg-[#658A4B] hover:bg-[#3f572e] w-full">
            Login
          </button>
        </form>
        <h1 className="mt-4">
          New to Indus Culture?
          <span className="m-2 hover:text-blue-800">
            <Link to={"/signup"}>Sign Up</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};
