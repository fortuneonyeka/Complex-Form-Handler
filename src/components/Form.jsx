import React, { useState } from "react";

const Form = () => {
  const initialState = [{ firstName: "", email: "", address: "" }];

  const [details, setDetails] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log("Form submitted:", details);
    setDetails(initialState)
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newDetails = [...details];
    newDetails[index][name] = value;
    setDetails(newDetails);
  };

  const addField = () => {
    setDetails([...details, { firstName: "", email: "", address: "" }]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-blue-100 to-teal-100">
      <fieldset className="border-4 border-teal-500 p-6 sm:p-8 md:p-12 rounded-lg w-full max-w-md relative bg-white shadow-lg">
        <legend className="text-xl sm:text-2xl font-bold text-teal-700 px-4">
          User Registration
        </legend>
        <form onSubmit={handleSubmit}>
          {details.map((detail, index) => (
            <div key={index} className="mb-4">
              {Object.keys(detail).map((key) => (
                <div key={key} className="mb-2">
                  <label
                    htmlFor={`${key}-${index}`}
                    className="block text-sm sm:text-base font-medium text-teal-800"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  {key === "address" ? (
                    <textarea name={key} id={`${key}-${index}`} value={detail[key]} cols="10" rows="3" onChange={(e) => handleInputChange(e, index)} className="w-full py-2 px-3 rounded-md text-sm sm:text-base border-2 border-teal-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"/>
                  ): (
                    <input
                    id={`${key}-${index}`}
                    type={key === "email" ? "email": "text"}
                    name={key}
                    value={detail[key]}
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
                  +
                </button>
                {details.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeField(index)}
                    className="text-red-500"
                  >
                    x
                  </button>
                )}
              </div>
            </div>
          ))}
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
