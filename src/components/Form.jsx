import React, { useState, useRef, useEffect } from "react";
import { faCheck,faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = () => {
  const userRef = useRef();
  const errRef = useRef();

  // const initialState = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   address: "",
  // };
  const [userDetails, setUserDetails] = useState("");
  

  // useEffect(() => {
  //   userRef.current.focus()
  // },[])
  

  // useEffect(() => {
  //   const result = USER_REGEX.test(user)
  //   console.log(result);
  //   console.log(user);
  //   setValidName(result)
  // },[user])
  

  // useEffect(() => {
  //   const result = PWD_REGEX.test(pwd)
  //   console.log(result);
  //   console.log(pwd);

  //   const passwordMatch = pwd === matchPwd
  //   setValidMatch(passwordMatch)
  // },[pwd, matchPwd])


  // useEffect(() => {
  //   setErrMsg("")
  // },[user, pwd, matchPwd])
  
 

  // must start with lower or uppercase letter, must be anywhere from 4-23 characters, lower or uppercase,digits,hifins or underscores,
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

  // At least one lower case, one uppercase letter, one digit and one special character and must be 8-24 chracters
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const maskedDetails = {
      ...userDetails,
      password: "*".repeat(userDetails.password.length),
    };
    console.log(maskedDetails);

    setDetails("");
    // setPasswordError('')
  };

  
  return (
    <section className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-blue-100 to-teal-100">
<p ref={errRef} className={`${errMsg ? 'text-red-600 bg-red-100 p-2 rounded' : 'sr-only'}`}aria-live="assertive">
  {errMsg}</p>      
  <fieldset className="border-4 border-teal-500 p-6 sm:p-8 md:p-12 rounded-lg w-full max-w-md relative bg-white shadow-lg">
        <legend className="text-xl sm:text-2xl font-bold text-teal-700 px-4">
          User Registration
        </legend>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm sm:text-base font-medium mb-1 text-teal-800"
            >
              Name:
            </label>
            <input
            ref={userRef}
            autoComplete="off"
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
              id="name"
              required
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              type="text"
              className="w-full py-2 px-3 rounded-md text-sm sm:text-base border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium mb-1 text-teal-800"
            >
              Email:
            </label>
            <input
            ref={userRef}
            autoComplete="off"
            // aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            // onFocus={() => setPwdFocus()}
              id="email"
              required
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              type="email"
              className="w-full py-2 px-3 rounded-md text-sm sm:text-base border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium mb-1 text-teal-800"
            >
              Password:
            </label>
            <input
            ref={userRef}
            autoComplete="off"
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setPwdFocus()}
              id="password"
              name="password"
              required
              // value={userDetails.password}
              onChange={handleInputChange}
              type="password"
              className="w-full py-2 px-3 rounded-md text-sm sm:text-base border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium mb-1 text-teal-800"
            >
              Confirm Password:
            </label>
            <input
            ref={userRef}
            autoComplete="off"
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setPwdFocus()}
              id="password"
              name="password"
              required
              // value={userDetails.password}
              onChange={handleInputChange}
              type="password"
              className="w-full py-2 px-3 rounded-md text-sm sm:text-base border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
            />
          </div>

        

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md text-sm sm:text-base hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 shadow-md hover:shadow-lg mb-4"
          >
            Register
          </button>

          <div className="">
            <p>Already registered?</p>
            <a href="">Login</a>
          </div>
        </form>
      </fieldset>
    </section>
  );
};

export default Form;
