import React from "react";

const Formss = () => {
  return (
    <>
      <form>
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Register your business
          </h2>

          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email ID"
          />
        </div>
        <div className="mb-4">
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="selection"
            >
              <option>Select</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.5 7l4.5 4.5L14.5 7H5.5z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-yellow-500 text-white w-full font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Formss;
