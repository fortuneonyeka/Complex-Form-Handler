import React, { useState } from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { CgPlayListRemove } from "react-icons/cg";

const Form = () => {
  const initialState = [{ firstName: "", email: "", address: "" }];

  const [userDetails, setUserDetails] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    const message = userDetails.length > 1 ? `${userDetails.length} Users registered`: `${userDetails.length} User registered`
    console.log(message, userDetails);
    setUserDetails(initialState)
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newUserDetails = [...userDetails];
    newUserDetails[index][name] = value;
    setUserDetails(newUserDetails);
  };

  const addField = () => {
    setUserDetails([...userDetails, { firstName: "", email: "", address: "" }]);
  };

  const removeField = (index) => {
    const newUserDetails = userDetails.filter((_, i) => i !== index);
    setUserDetails(newUserDetails);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-blue-100 to-teal-100">
      <fieldset className="border-4 border-teal-500 p-6 sm:p-8 md:p-12 rounded-lg w-full max-w-md relative bg-white shadow-lg">
        <legend className="text-xl sm:text-2xl font-bold text-teal-700 px-4">
          {userDetails.length > 1? "Users Registration": "User Registration"}
        </legend>
        <form onSubmit={handleSubmit}>
          {userDetails.map((detail, index) => (
            <div key={index} className="mb-4">
              {Object.keys(detail).map((name) => (
                <div key={name} className="mb-2">
                  <label
                    htmlFor={`${name}-${index}`}
                    className="block text-sm sm:text-base font-medium text-teal-800"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}:
                  </label>
                  {name === "address" ? (
                    <textarea name={name} id={`${name}-${index}`} value={detail[name]} placeholder={name} cols="10" rows="3" onChange={(e) => handleInputChange(e, index)} className="w-full py-2 px-3 rounded-md text-sm sm:text-base border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"/>
                  ): (
                    <input
                    id={`${name}-${index}`}
                    type={name === "email" ? "email": "text"}
                    required = {name === "email"}
                    name={name}
                    value={detail[name]}
                    placeholder={name}
                    onChange={(e) => handleInputChange(e, index)}
                    className="w-full py-2 px-3 rounded-md text-sm sm:text-base border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
                  />
                  )}
                  
                </div>
              ))}
              <div className="flex gap-6 cursor-pointer text-xl">
                <button
                  type="button"
                  onClick={addField}
                  className="text-green-500"
                >
                 <MdOutlineAddToPhotos />
                </button>
                {userDetails.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeField(index)}
                    className="text-red-500"
                  >
                   <CgPlayListRemove />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md text-sm sm:text-base hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 shadow-md hover:shadow-lg"
          >
            {userDetails.length > 1 ? "Add Users" : "Add User"}
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
