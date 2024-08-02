import React, { useState } from "react";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    address: "",
  };
  const [details, setDetails] = useState(initialState);
  const [passwordError, setPasswordError] = useState('')


  const validatePassword = (password) => {
      const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
      if (!regex.test(password)) {
        setPasswordError('Password must be a minimum of 6 characters wit at least one capital letter, one number, and one special character.')
      } else {
        setPasswordError('')
      }
    }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    if (name === 'password') {
      validatePassword(value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordError) {
      alert('Password must be a minimum of 6 characters wit at least one capital letter, one number, and one special character.')
      return
    }
    const maskedDetails = {
      ...details,
      password: "*".repeat(details.password.length),
    };
    console.log(maskedDetails);

    setDetails(initialState);
    setPasswordError('')
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-blue-100 to-teal-100">
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
              id="name"
              required
              name="name"
              value={details.name}
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
              id="email"
              required
              name="email"
              value={details.email}
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
              id="password"
              name="password"
              required
              value={details.password}
              onChange={handleInputChange}
              type="password"
              className="w-full py-2 px-3 rounded-md text-sm sm:text-base border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="address"
              className="block text-sm sm:text-base font-medium mb-1 text-teal-800"
            >
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              required
              value={details.address}
              onChange={handleInputChange}
              rows="4"
              className="w-full py-2 px-3 rounded-md text-sm sm:text-base border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md text-sm sm:text-base hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
