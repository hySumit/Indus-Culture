// Import necessary libraries
import React, { useContext, useState } from "react";
import { Context } from "../Auth/Context";
import { Navbar } from "../Navbar/Navbar";
import loginImg2 from "../../assets/login-removebg.png";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const { isAuth, setIsAuth } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();
  const {name,setName} = useContext(Context)

  const handleChange = (e) => {
    setEmail(e.target.value);
    // setName(e.target.value)
  };

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    if (newPassword.length <= 8) {
      setPassword(newPassword);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();


    localStorage.setItem("email", email);
    localStorage.setItem("password", password);


    setIsAuth(true);

    setEmail("");
    setPassword("");

  
    toast({
      title: "Account Created Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-x-hidden">
      {/* Hide the image on smaller and medium screens */}
      <div className="hidden sm:block md:block lg:block w-[40%]">
        <img className="w-full h-[90%]" src={loginImg2} alt="" />
      </div>

      <div className="w-[60%] sm:w-[80%] md:w-[60%] lg:w-[60%] p-8">
        <h1 className="text-3xl font-bold mb-8">Create Account !</h1>

        {/* Form for login */}
        <form
          className="flex flex-col items-center"
          onSubmit={handleFormSubmit}
        >
          <label htmlFor="email" className="mb-2">
            Name
          </label>
          <input
            id="Name"
            type="text"
            placeholder="Enter Name"
            className="border p-2 mb-4 w-full"
            value={name}
            name="Name"
            onChange={handleName}
            required
          />
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter Your Email"
            className="border p-2 mb-4 w-full"
            value={email}
            name="Email"
            onChange={handleChange}
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
            Create Account
          </button>
        </form>
        <h1 className="mt-4">
          Already have an Account ?
          <span className="m-2 hover:text-blue-800">
            <Link to={"/login"}>Login</Link>
          </span>
        </h1>
      </div>
    </div>
  );
};
