import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchdata } from "../Redux/AppReducer/action";
const SearchhtmlForm = () => {
  const [status, setStatus] = useState("");
  const [launch, setlaunch] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata(status, launch, type));
  }, [dispatch, status, launch, type]);
  return (
    <div className="flex flex-wrap justify-around m-auto ">
      <div className="flex items-center">
        <label
          htmlFor="status"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-1"
        >
          Select by Status
        </label>
        <select
          id="status"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-42 p-2.5 
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
           dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Capsules by status</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="destroyed">Destroyed</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="flex items-center">
        <label
          htmlFor="launch"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-1"
        >
          Select by Launch
        </label>
        <input
          id="launch"
          type="date"
          className="p-1 rounded"
          onChange={(e) => setlaunch(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="type"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-1"
        >
          Select by Type
        </label>
        <select
          id="type"
          onChange={(e) => setType(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 block w-42 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choose a type</option>
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
        </select>
      </div>
    </div>
  );
};

export default SearchhtmlForm;
